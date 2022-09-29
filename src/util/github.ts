import { sleep } from './sleep';

export async function doGithubRequest<D>(
  path: string,
  method = 'GET',
  { headers = {}, ...init }: RequestInit = {}
): Promise<D> {
  if (localStorage.getItem('__github_api_rate_limit_data')) {
    runRateLimitChecks(
      JSON.parse(localStorage.getItem('__github_api_rate_limit_data') || '{}')
    );
  }

  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      ...headers,
    },
    ...init,
  });

  if (res.ok)
    console.log(
      '%c[GitHub] %c%s %c%s %c%s',
      'color: gray',
      'color: yellow',
      method,
      'color: initial',
      path,
      `color: ${res.ok ? 'initial' : 'red'}`,
      `${res.status} ${res.statusText}`
    );

  setRateLimitData(res);
  runRateLimitChecks(
    JSON.parse(localStorage.getItem('__github_api_rate_limit_data') || '{}')
  );

  if (!res.ok) throw await res.json();

  return await res.json();
}

interface GitHubRateLimit {
  limit: number;
  remaining: number;
  reset: number;
}

export function runRateLimitChecks(data: GitHubRateLimit) {
  if (data.remaining === 0) {
    const reset = new Date(data.reset);
    console.warn(
      '%c[GitHub] %cRate limit exceeded. Reset at %s',
      'color: gray',
      'color: red',
      reset.toLocaleString()
    );

    sleep(reset.getTime() - Date.now());
  }
}

export function setRateLimitData(res: Response) {
  const data: GitHubRateLimit = {
    limit: +(res.headers.get('x-ratelimit-limit') ?? Infinity),
    remaining: +(res.headers.get('x-ratelimit-remaining') ?? 1),
    reset: +(res.headers.get('x-ratelimit-reset')! ?? 1e26) * 1000,
  };

  localStorage.setItem('__github_api_rate_limit_data', JSON.stringify(data));
}

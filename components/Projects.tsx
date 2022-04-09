import useSWR from 'swr';
import { doGithubRequest } from '../util/github';
import { Card } from './Card';
import styles from '../styles/Home.module.css';

export interface ProjectsConfig {
  limit?: number;
}

export const Projects: React.FC<ProjectsConfig> = ({ limit = 5 }) => {
  const { error, data } = useSWR('/users/splatterxl/repos', doGithubRequest, {
    refreshWhenHidden: false,
    refreshInterval: 30 * 1e3 * 60 * 60,
  });

  if (error)
    return (
      <div className={styles.error}>
        Failed to load GitHub data: {error.message}
      </div>
    );
  if (!data) return <div>Loading GitHub data...</div>;

  return <div>GitHub</div>;
};

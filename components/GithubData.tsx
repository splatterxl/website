import React from 'react';
import useSWR from 'swr';
import { doGithubRequest } from '../util/github';
import { Projects } from './Projects';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const GithubData: React.FC = () => {
  const { error, data } = useSWR<any>('/users/splatterxl', doGithubRequest, {
    refreshWhenHidden: false,
    refreshInterval: 30 * 1e3 * 60 * 60,
  });

  if (error)
    return (
      <div className={styles.error}>
        Failed to load GitHub data: {error.message}
      </div>
    );
  if (!data)
    return <div className={styles.loading}>Loading GitHub data...</div>;

  console.log(data);

  return (
    <div className={styles.container}>
      <h2>
        <Link href={data.html_url}>GitHub Statistics</Link>
      </h2>
      Followers: {data.followers} | Following: {data.following} | Repos: {data.public_repos}
      <hr />
      <div className={styles.grid}>
        <h3>Top Projects</h3>
        <Projects />
      </div>
    </div>
  );
};

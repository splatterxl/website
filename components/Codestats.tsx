import React from 'react';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';

export const Codestats: React.FC = () => {
  const { data, error } = useSWR(
    'https://codestats.net/api/users/splatterxl',
    (input) => fetch(input).then((res) => res.json())
  );

  if (error)
    return (
      <div className={styles.error}>
        Failed to load Code::Stats data
        <div className={styles.code}>{error.toString()}</div>
      </div>
    );
  if (!data) return <div>Loading Code::Stats data...</div>;

  const {
    languages: {
      Rust: { xps: rust },
      Elixir: { xps: elixir },
      TypeScript: { xps: typescript },
    },
  } = data;

  return <></>;
};

import styles from '../styles/Home.module.css';
import React from 'react';
import useSWR from 'swr';

export const Zen: React.FC = () => {
  const { data, error } = useSWR<string>('/api/zen', (input) =>
    fetch(input).then((res) => res.text())
  );

  if (error) return <div className={styles.error}>Failed to load</div>;
  if (!data) return <div>Loading zen...</div>;

  const splitted = data.split('. ');
  const person = splitted.pop(),
    quote = splitted.join('. ');

  return (
    <div>
      <span className={styles.zenBold}>{quote}</span> <i>- {person}</i>
    </div>
  );
};

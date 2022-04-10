import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const Card: React.FC<{
  name: string;
  description: string;
  link?: string;
  icon?: string;
}> = (options) => {
  const { name, description } = options;

  const elem = (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );

  if (options.link)
    return (
      <div className={styles.cardLink}>
        <Link href={options.link}>{elem}</Link>
      </div>
    );

  return elem;
};

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Badges } from '../components/Badges';
import { Codestats } from '../components/Codestats';
import { Projects } from '../components/Projects';
import { Zen } from '../components/Zen';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Splatterxl</title>
        <meta
          name="description"
          content="typescript, rust, elixir. constantly breaking important stuff"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Splatterxl</h1>
        <Zen />

        <p className={styles.description}>
          I&apos;m a{' '}
          <span className={styles.link}>
            <Link href={'https://rustlang.org'}>Rust</Link>
          </span>
          ,{' '}
          <span className={styles.link}>
            <Link href={'https://elixir-lang.org'}>Elixir</Link>
          </span>{' '}
          and{' '}
          <span className={styles.link}>
            <Link href={'https://typescriptlang.org'}>TypeScript</Link>
          </span>{' '}
          developer, with a knack for breaking things.
        </p>

        <div className={styles.grid}>
          <Projects />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import { BouncingDownArrow } from '../components/BouncingDownArrow';
import React from 'react';
import { DownArrow } from '../components/DownArrow';
import { Pronouns } from '../components/Pronouns';

const Home: NextPage = () => {
  const [innerHeight, setInnerHeight] = React.useState(0);

  React.useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  if (innerHeight === 0) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Splatterxl</title>
        <meta
          name="description"
          content="typescript, rust, elixir. constantly breaking important stuff"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          className={styles.container}
          style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#fafafa',
          }}
        >
          <div className={styles.header}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Splatterxl
            </motion.h1>
            <Pronouns />
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.description}>
              Backend engineer, frontend designer and almost everything in
              between.
            </p>
          </motion.div>
        </div>
        <DownArrow innerHeight={innerHeight} />
        <div className={styles.section} style={{}}>
          <h2
            style={{
              marginBlockEnd: 0,
            }}
          >
            Soon...
          </h2>
          <p
            style={{
              marginBlockStart: 0,
              textAlign: 'center',
            }}
          >
            Something will be here later. In the meantime, check out my{' '}
            <a
              href="https://github.com/splatterxl"
              style={{
                textDecoration: 'underline',
              }}
            >
              GitHub profile
            </a>
            !
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Icons } from '../components/Icons';
import { Meta } from '../components/Meta';
import { ThemeToggleHeader } from '../components/ThemeToggleHeader';
import { getZen } from './api/zen';

const Home: NextPage<{ zen: { message: string; source: string } }> = ({
  zen,
}) => {
  return (
    <>
      <Head>
        <Meta />
        <title>Splatterxl</title>
      </Head>

      <main className="top-0 left-0 absolute w-full bg-gradient-to-t from-slate-300 to-white dark:from-slate-900 dark:to-slate-800 dark:text-slate-50 transition ease-in-out duration-300 flex justify-center items-center">
        <header className="flex flex-col min-h-[100vh] min-w-[90vw] w-full sm:min-w-0 md:max-w-[90vw] lg:max-w-[60vw] px-12 justify-start items-center p-12 pb-12 pt-16 sm:pt-32">
          <ThemeToggleHeader />

          <p className="mt-2 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            Hello! You&apos;ve found my little corner of the internet. I&apos;m
            a student & programmer from{' '}
            <span className="text-lime-600 dark:text-lime-400">Ire</span>
            <span>la</span>
            <span className="text-orange-600 dark:text-orange-400">nd</span>,
            and I&apos;m passionate about Open Source software.
          </p>

          <p className="mt-3 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            I&apos;m mostly a fullstack developer but most of my work currently
            happens for personal projects. I do have a few repositories on my{' '}
            <Link
              href="https://github.com/splatterxl"
              className="text-link external"
            >
              GitHub profile
            </Link>
            .
          </p>

          <p className="mt-3 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            I specialise in creating web applications in TypeScript using React,
            and REST APIs. I have experience using NoSQL based databases like
            MongoDB, and limited experience using SQL-based databases.
          </p>

          <p className="mt-3 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            Contact:{' '}
            <Link href="https://github.com/splatterxl" className="text-link">
              GitHub
            </Link>{' '}
            |{' '}
            <Link href="https://twitter.com/wontfixbug" className="text-link">
              Twitter
            </Link>{' '}
            |{' '}
            <Link href="https://t.me/at_someone" className="text-link">
              Telegram
            </Link>{' '}
            |{' '}
            <Link href="https://ko-fi.com/splatterxl" className="text-link">
              Ko-fi
            </Link>{' '}
            |{' '}
            <Link href="mailto:contact@splt.dev" className="text-link">
              Email
            </Link>
          </p>

          <Link rel="me" href="https://uwu.social/@splatterxl"></Link>

          <div aria-hidden className="block md:hidden pt-4">
            <Icons />
          </div>
        </header>
      </main>
    </>
  );
};

export default Home;

Home.getInitialProps = async function (context) {
  return { zen: getZen()! };
};

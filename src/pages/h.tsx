import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Icons } from '../components/Icons';
import { Meta } from '../components/Meta';
import { HHeader } from '../components/hToggleHeader';
import { getZen } from './api/zen';

const Home: NextPage<{ zen: { message: string; source: string } }> = ({
  zen,
}) => {
  return (
    <>
      <Head>
        <Meta h />
        <title>hhhhhhhhh</title>
      </Head>

      <main className="top-0 left-0 absolute w-full bg-gradient-to-t from-slate-300 to-white dark:from-slate-900 dark:to-slate-800 dark:text-slate-50 transition ease-in-out duration-300 flex justify-center items-center">
        <header className="flex flex-col min-h-[100vh] min-w-[90vw] w-full sm:min-w-0 md:max-w-[90vw] lg:max-w-[60vw] px-12 justify-start items-center p-12 pb-12 pt-32">
          <HHeader />

          <p className="mt-2 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            {'h'.repeat(70)}
            <span className="text-lime-400">h</span>
            <span>h</span>
            <span className="text-orange-400">h</span>hhhh, {'h'.repeat(33)}
          </p>

          <p className="mt-2 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            {'h'.repeat(70)}. {'h'.repeat(3)} {'h'.repeat(30)}
          </p>
          <p className="mt-2 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            {'h'.repeat(60)}. {'h'.repeat(15)} {'h'.repeat(70)}
          </p>

          <p className="mt-3 text-center md:text-left md:w-full xxs:px-10 sm:px-14 md:px-0">
            hhhhhh:{' '}
            <Link href="https://github.com/splatterxl" className="text-link">
              hhhhhh
            </Link>{' '}
            |{' '}
            <Link href="https://twitter.com/wontfixbug" className="text-link">
              hhhhhhhh
            </Link>{' '}
            |{' '}
            <Link href="https://t.me/at_someone" className="text-link">
              hhhhhh
            </Link>{' '}
            |{' '}
            <Link href="https://ko-fi.com/splatterxl" className="text-link">
              hhhh
            </Link>{' '}
            |{' '}
            <Link href="mailto:contact@splt.dev" className="text-link">
              hhhhhh
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

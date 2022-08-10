import type { NextPage } from 'next';
import Head from 'next/head';
import { Appear } from '../components/Appear';
import { Icons } from '../components/Icons';
import { Meta } from '../components/Meta';
import { ThemeToggleHeader } from '../components/ThemeToggleHeader';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <Meta />
        <title>Splatterxl</title>
      </Head>

      <main className="top-0 left-0 absolute flex flex-col w-full">
        <div className="w-full h-screen flex flex-col justify-center items-center p-12 bg-gradient-to-t from-slate-300 to-slate-50 dark:from-slate-900 dark:to-slate-800 dark:text-slate-50 transition ease-in-out duration-300">
          <noscript></noscript>
          <div className="pb-5 flex flex-col items-center justify-center pl-6">
            <ThemeToggleHeader />
            <Appear
              duration={0.6}
              id="desc"
              as="p"
              className="mt-0 text-left select-none w-full"
            >
              Backend engineer, frontend designer and almost everything in
              between.
            </Appear>
            <Icons />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

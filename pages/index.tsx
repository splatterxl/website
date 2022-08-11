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
        <div className="w-full h-screen flex flex-col justify-center items-center p-12 bg-gradient-to-tr from-slate-300 to-white dark:from-slate-900 dark:to-slate-700 dark:text-slate-50 transition ease-in-out duration-300">
          <div
            id="container"
            className="flex flex-col items-center justify-center md:pl-16 pb-3.5 pt-1.5 h-48 mr-5"
          >
            <Appear duration={0.8}>
              <ThemeToggleHeader />
              <p className="mt-0 text-left select-none md:w-full">
                Backend engineer, frontend designer and almost everything in
                between.
              </p>
              <Icons />
            </Appear>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

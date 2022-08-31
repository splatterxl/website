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
            className="flex flex-col items-center justify-center md:border-l-black dark:md:border-l-white md:border-l-8 md:pl-10 lg:pl-16 pb-4 pt-1 h-48 mx-6 md:ml-4 md:mr-0"
          >
            <Appear duration={0.8}>
              <ThemeToggleHeader />
              <p className="mt-0 text-center md:text-left select-none md:w-full xxs:px-10 sm:px-14 md:px-0">
                Breaking production code since 2020. Backend, frontend, everything else.
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

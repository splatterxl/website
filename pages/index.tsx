import { motion } from 'framer-motion';
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
        <div className="w-full h-screen flex flex-col justify-center items-center p-12 bg-gradient-to-t from-slate-200 to-white dark:from-slate-900 dark:to-slate-800 dark:text-slate-50 transition ease-in-out duration-300">
          <div className="flex flex-col items-center border-l-black dark:border-l-white border-l-8 justify-center pl-10 pb-5 pt-1.5 h-48 mr-5">
            <Appear duration={0.8} doWidth>
              <motion.div
                transition={{
                  duration: 0.8,
                  times: [0, 0.5, 0.7],
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 0, 1],
                }}
              >
                <ThemeToggleHeader />
                <p className="mt-0 text-left select-none w-full">
                  Backend engineer, frontend designer and almost everything in
                  between.
                </p>
                <Icons />
              </motion.div>
            </Appear>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

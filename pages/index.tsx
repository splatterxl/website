import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Pronouns } from '../components/Pronouns';

const Home: NextPage = () => {
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

      <main className="top-0 left-0 absolute flex flex-col w-full">
        <div className="w-full h-screen flex flex-col justify-center items-center p-12 bg-slate-50">
          <div className="pb-5">
            <div className="flex flex-row justify-center pb-1">
              <motion.h1
                className="text-5xl xxs:text-7xl md:text-9xl font-bold"
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
              <p className="mt-0 text-center">
                Backend engineer, frontend designer and almost everything in
                between.
              </p>
            </motion.div>
          </div>
        </div>
        {/* <DownArrow />
        <div className="flex justify-center items-center flex-col w-full p-8 h-screen bg-slate-100">
          <h2 className="mb-0 font-bold text-2xl">Soon...</h2>
          <p className="text-center mb-0">
            Something will be here later. In the meantime, check out my{' '}
            <a href="https://github.com/splatterxl" className="underline">
              GitHub profile
            </a>
            !
          </p>
        </div> */}
      </main>
    </>
  );
};

export default Home;

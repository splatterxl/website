import type { NextPage } from 'next';
import Head from 'next/head';
import { Appear } from '../components/Appear';
import { Icons } from '../components/Icons';
import { Meta } from '../components/Meta';
import { Pronouns } from '../components/Pronouns';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <Meta />
      </Head>

      <main className="top-0 left-0 absolute flex flex-col w-full">
        <div className="w-full h-screen flex flex-col justify-center items-center p-12 bg-slate-50">
          <div className="pb-5">
            <div className="flex flex-row justify-center pb-1 pr-8">
              <Appear
                className="text-5xl xxs:text-7xl md:text-9xl font-bold"
                duration={0.5}
                as="h1"
                id="head"
              >
                Splatterxl
              </Appear>
              <Pronouns />
            </div>
            <Appear duration={0.6} id="desc">
              <p className="mt-0 text-center">
                Backend engineer, frontend designer and almost everything in
                between.
              </p>
            </Appear>
            <Icons />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

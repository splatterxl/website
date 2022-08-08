import Head from 'next/head';
import { Appear } from '../components/Appear';
import { Meta } from '../components/Meta';

export default function About() {
  return (
    <>
      <Head>
        <Meta page="About" />
        <title>Splatterxl | About</title>
      </Head>

      <div className="w-full h-screen flex flex-col justify-center items-center p-12 bg-slate-50">
        <Appear
          duration={0.5}
        >
          the
        </Appear>
      </div>
    </>
  );
}

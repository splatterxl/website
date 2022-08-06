import Head from 'next/head';
import {
  Meta
} from '../components/Meta';

export default function About() {
  return (
    <>
      <Head>
        <Meta />
      </Head>

      <div className="w-full h-screen flex flex-col justify-center items-center p-12 bg-slate-50"></div>
    </>
  );
}

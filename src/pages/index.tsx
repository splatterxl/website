import type { NextPage } from 'next';
import Head from 'next/head';
import { Appear } from '../components/Appear';
import { BouncingDownArrow } from '../components/BouncingDownArrow';
import { Icons } from '../components/Icons';
import { Meta } from '../components/Meta';
import { ThemeToggleHeader } from '../components/ThemeToggleHeader';
import { getZen } from './api/zen';

const Home: NextPage<{ zen: { message: string; source: string } }> = ({
  zen,
}) => {
  return (
    <>
      splat
    </>
  );
};

export default Home;

Home.getInitialProps = async function (context) {
  return { zen: getZen()! };
};

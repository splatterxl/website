import type { NextPage } from 'next';
import Head from 'next/head';
import { Appear } from '../components/Appear';
import { BouncingDownArrow } from '../components/BouncingDownArrow';
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

      <main className="top-0 left-0 absolute w-full bg-gradient-to-tr from-slate-300 to-white dark:from-slate-900 dark:to-slate-700 dark:text-slate-50 transition ease-in-out duration-300">
        <header className="flex flex-col min-h-[100vh]">
          <div className="w-full h-screen flex flex-col justify-center items-center p-12 pb-12">
            <div
              id="container"
              className="flex flex-col items-center justify-center md:border-l-black dark:md:border-l-white md:border-l-8 md:pl-10 lg:pl-16 pb-4 pt-1 h-48 mx-6 md:ml-4 md:mr-0"
            >
              <Appear duration={0.8}>
                <ThemeToggleHeader />
                <p className="mt-0 text-center md:text-left select-none md:w-full xxs:px-10 sm:px-14 md:px-0">
                  Programming since 2020. Backend, frontend, everything else.{' '}
                  <a rel="me" href="https://uwu.social/@splatterxl"></a>
                </p>
                <Icons />
              </Appear>
            </div>
            <BouncingDownArrow />
          </div>
        </header>

        <article className="flex flex-col w-full pt-64 px-12 md:px-52 pb-64">
          <h2 className="pb-12 text-7xl font-extrabold">My Journey</h2>

          <ol className="relative border-l border-gray-200 dark:border-gray-500 mx-2">
            {[
              {
                date: 'March 2020',
                title: 'Dived into Programming',
                desc: "I was bored in the COVID-19 lockdown and decided to learn programming. I created my first ever project, a website for an imaginary company. While it wasn't pretty, I learned core programming concepts while making it and I don't regret it at all.",
              },
              {
                date: 'February 2021',
                title: 'Creating Discord Bots',
                desc: 'I started tinkering with different JavaScript libraries and discovered the interactive Discord bots – apps inside the chat platform that can respond to commands and interact with other users.',
                button: {
                  label: 'Create your own',
                  link: 'https://discord.com/build',
                },
              },
              {
                date: 'May 2022',
                title: 'More Languages',
                desc: 'I learnt new programming languages like Rust, Elixir and Python. I experimented with technologies like React, Docker and Git. I furthered my skills in web development and studied UI/UX courses to understand intuitive design.',
              },
            ].map((v, i, { length }) => {
              return (
                <li
                  className={`${i === length - 1 ? 'mb-3' : 'mb-10'} ml-6`}
                  key={v.title}
                >
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-500"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    {v.date}
                  </time>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    {v.desc}
                  </p>
                  {v.button ? (
                    <a
                      href={v.button.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 mt-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      {v.button.label}{' '}
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  ) : null}
                </li>
              );
            })}
          </ol>

          {/* <div className="w-full flex flex-col justify-center items-center p-12 pb-12">
            <BouncingDownArrow i={2} />
          </div> */}
        </article>
        <footer className="w-full my-3 mb-16 flex flex-col justify-center items-center gap-6 text-gray-400">
          <hr className="w-[60%] opacity-50" />
          Copyright © Splatterxl, 2023.
        </footer>
      </main>
    </>
  );
};

export default Home;

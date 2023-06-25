import { useTheme } from 'next-themes';
import Link from 'next/link';
import { confettiBurst } from '../utils/confetti';
import { Icons } from './Icons';

export const HHeader: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="flex flex-col md:flex-row justify-center md:justify-start pb-1 group w-full md:w-full hover:cursor-pointer md:items-end">
      <h1
        onClick={() => {
          confettiBurst(100);
        }}
        className="text-[2rem] sm:text-[3.6rem] leading-none mb-1 md:leading-none md:text-8xl font-bold select-none text-center md:text-left"
      >
        {'h'.repeat(7)}
      </h1>
      <Link
        href="/"
        className="text-[2rem] sm:text-[3.6rem] md:text-8xl select-none font-bold pb-1"
      >
        .
      </Link>

      <div className="md:pb-5 flex-col justify-center align-center hidden md:inline">
        <Icons />
      </div>

      <hr className="mt-2 border-slate-500 inline md:hidden" />
    </header>
  );
};

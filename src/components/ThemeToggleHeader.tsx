import { useTheme } from 'next-themes';
import { confettiBurst } from '../utils/confetti';

export const ThemeToggleHeader: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header
      className="flex flex-row justify-center md:justify-start pb-1 group w-auto md:w-full hover:cursor-pointer"
      onClick={() => {
        confettiBurst(100);

        // setTimeout(() => {
        //   setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        // }, 150);
      }}
    >
      <h1 className="text-[3.6rem] leading-none mb-1 md:leading-none md:text-8xl font-bold select-none text-center md:text-left">
        Splatterxl
      </h1>
    </header>
  );
};

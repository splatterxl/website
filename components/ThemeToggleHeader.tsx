import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export const ThemeToggleHeader: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header
      className="flex flex-row justify-start pb-1 group w-full hover:cursor-pointer"
      onClick={() =>
        setTimeout(() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        }, 150)
      }
    >
      <h1
        className="text-5xl xxs:text-7xl md:text-9xl font-bold select-none group-active:translate-y-1"
      >
        Splatterxl
      </h1>
      <span
        aria-hidden
        className="justify-end flex-col hidden xs:flex group-active:translate-y-1 select-none italic"
      >
        he/him
      </span>
    </header>
  );
};

import { useTheme } from 'next-themes';

export const ThemeToggleHeader: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header
      className="flex flex-row justify-center md:justify-start pb-1 group w-auto md:w-full hover:cursor-pointer"
      onClick={() =>
        setTimeout(() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        }, 150)
      }
    >
      <h1 className="text-[3.6rem] leading-none md:leading-snug md:text-7xl font-bold select-none text-center md:text-left group-active:translate-y-1">
        Splatterxl
      </h1>
      {/* <span
        aria-hidden
        className="justify-end flex-col hidden xs:flex group-active:translate-y-1 select-none italic"
      >
        he/him
      </span> */}
    </header>
  );
};

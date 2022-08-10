import { useTheme } from 'next-themes';
import { Appear } from './Appear';

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
      <Appear
        duration={0.5}
        as="h1"
        className="text-5xl xxs:text-7xl md:text-9xl font-bold select-none group-active:translate-y-1"
      >
        Splatterxl
      </Appear>
      <div
        className="justify-end flex-col hidden xs:flex group-active:translate-y-1 select-none"
        aria-hidden
      >
        <Appear duration={0.8}>
          <span className="select-none italic">he/him</span>
        </Appear>
      </div>
    </header>
  );
};

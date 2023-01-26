import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../utils/console';

export default function Portfolio({ Component, pageProps }: any) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

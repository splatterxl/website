import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../util/console';
import { DisappearProvider } from '../util/TransitionProvider';

export default function Portfolio({ Component, pageProps }: any) {
  return (
    <DisappearProvider>
      <Component {...pageProps} />
    </DisappearProvider>
  );
}

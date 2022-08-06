import '../styles/globals.css';
import '../util/console';
import { DisappearProvider } from '../util/Disappear';

export default function Portfolio({ Component, pageProps }: any) {
  return (
    <DisappearProvider>
      <Component {...pageProps} />
    </DisappearProvider>
  );
}

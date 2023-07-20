import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="/assets/e0e3e0f61d042aa38595bc8e09f2b687c0ec519c.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ backgroundColor: '#233044' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

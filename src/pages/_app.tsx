import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import '../styles/globals.css';
import '../utils/console';

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)

function scrollFunction() {
  const navbar = document.getElementById('header');

  if (navbar) {
    if (
      document.body.scrollTop > window.innerHeight - 10 ||
      document.documentElement.scrollTop > window.innerHeight - 10
    ) {
      navbar.style.visibility = 'visible  ';
    } else {
      navbar.style.visibility = 'hidden';
    }
  }
}

export default function Portfolio({ Component, pageProps }: any) {
  useEffect(() => {
    // window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  });

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

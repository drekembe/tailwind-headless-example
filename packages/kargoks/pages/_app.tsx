import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to kargoks!</title>
      </Head>
      <div className="light">
        <main className={`app min-h-screen dark:bg-zinc-800 dark:text-white`}>
          <style jsx global>
            {`
              html {
                font-family: ${inter.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;

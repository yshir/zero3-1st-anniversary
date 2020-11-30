import React, { ReactElement, useEffect } from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';
import Head from 'next/head';
import { config } from '../config';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        {config.APP_ENV !== 'production' && <meta name="robots" content="noindex" />}
        <meta key="viewport" name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';
import Head from 'next/head';
import { config } from '../config';

export default ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        {config.APP_ENV !== 'production' && <meta name="robots" content="noindex" />}
        <meta key="viewport" name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

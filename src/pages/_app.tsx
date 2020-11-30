import React, { ReactElement, useEffect } from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';
import Head from 'next/head';
import { config } from '../config';
import { pageview } from '../lib/gtag';
import { useRouter } from 'next/dist/client/router';

const url = 'https://1st-anniversary.zero3.me';
const title = '0:00 1周年記念特設サイト | 0:00 [ゼロスリー]';
const description =
  '0:00は童話の世界観をモチーフにしたアクセサリーを提案するブランドです。「0:00を過ぎても解けない魔法をいつまでも」をコンセプトに儚くも美しいアクセサリーをお届けしています。';
const ogp = 'https://assets.zero3.me/resources/client/general/ogp.jpg';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {config.APP_ENV !== 'production' && <meta name="robots" content="noindex" />}
        <meta key="viewport" name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:image" property="og:image" content={ogp} />
        <meta key="og:site_name" property="og:site_name" content="0:00 [ゼロスリー]" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content="@000_zero3" />
        <meta key="twitter:url" name="twitter:url" content={url} />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={ogp} />
        <link key="favicon" rel="shortcut icon" href="/favicon.ico" />

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

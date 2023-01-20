import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';
import favicon from '@static/images/favicon.ico';
import seoImg from '@static/images/SEO_web.png';

const DEFAULT_SEO = {
  title: 'Fiunt | 피넛',
  description: '나의 첫번째 조각투자 Playground',
  canonical: 'https://oscnblock.com',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://oscnblock.com',
    title: 'Fiunt | 피넛',
    site_name: 'Fiunt | 피넛',
    images: [
      {
        url: `${seoImg.src}`,
        width: 285,
        height: 167,
        alt: '이미지',
      },
    ],
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet='utf-8' />
        <link rel='canonical' href='https://oscnblock.com' />
        <link rel='icon' href={favicon.src} />
      </Head>
      <GlobalStyle />
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;


import { Html, Head, Main, NextScript } from 'next/document';

import Header from '@/components/Header';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

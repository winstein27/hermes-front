import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Hermes</title>

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

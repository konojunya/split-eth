import {Box, ChakraProvider, extendTheme} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Header} from '../components/shared/Header';
import {breakpoints, config, styles} from '../styles/theme-config';

const theme = extendTheme({breakpoints, config, styles});

const App = ({pageProps, Component}: AppProps) => {
  return (
    <main>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>Split Ether</title>
        <meta name="description" content="Split the bill by Ether" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Split Ether" />
        <meta property="og:description" content="Split the bill by Ether" />
        <meta property="og:image" content="https://split-eth.web.app/ogp.png" />
        <meta name="twitter:title" content="y9z" />
        <meta name="twitter:description" content="Split the bill by Ether" />
        <meta
          name="twitter:image"
          content="https://split-eth.web.app/ogp.png"
        />
      </Head>

      <ChakraProvider theme={theme}>
        <Box maxW="500px" mx="auto">
          <Header />
          <Box px={4}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </ChakraProvider>
    </main>
  );
};

export default App;

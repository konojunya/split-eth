import {ExternalLinkIcon} from '@chakra-ui/icons';
import {
  Box,
  ChakraProvider,
  extendTheme,
  Text,
  Link as Anchor,
  Stack,
} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import {Header} from '../components/shared/Header';
import {breakpoints, styles} from '../styles/theme-config';

const theme = extendTheme({breakpoints, styles});

const App = ({pageProps, Component}: AppProps) => {
  return (
    <main>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>Split by ETH</title>
        <meta name="description" content="Split the bill by ETH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Split by ETH" />
        <meta property="og:description" content="Split the bill by ETH" />
        <meta property="og:image" content="https://split-eth.web.app/ogp.png" />
        <meta name="twitter:title" content="Split by ETH" />
        <meta name="twitter:description" content="Split the bill by ETH" />
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
            <Stack as="footer">
              <Text>&copy; konojunya</Text>
              <Link
                href="https://github.com/konojunya/split-eth"
                legacyBehavior
                passHref
              >
                <Anchor isExternal>
                  GitHub <ExternalLinkIcon mx="2px" />
                </Anchor>
              </Link>
            </Stack>
          </Box>
        </Box>
      </ChakraProvider>
    </main>
  );
};

export default App;

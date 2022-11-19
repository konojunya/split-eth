'use client';

import {Box, ChakraProvider, extendTheme} from '@chakra-ui/react';
import {Header} from '../components/shared/Header';
import {styles, config} from '../styles/theme-config';
const theme = extendTheme({styles, config});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ChakraProvider resetCSS theme={theme}>
          <Header />
          <Box mt={2} px={4}>
            {children}
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}

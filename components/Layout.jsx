import Head from 'next/head';
import { Box, VStack } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box w='full' h='full'>
        <Box as='header' h='20' w='full'>
          <Navbar />
        </Box>
        <Box as='main' mt='0'>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
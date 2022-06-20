import Link from 'next/link';
import { Flex, Hide, HStack, Box, Button, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { FaSearch } from 'react-icons/fa';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex w='full' h='20' align='center' justify='space-between' bg='gray.100' boxShadow='lg' pos='fixed' zIndex={1}>
    <Box fontSize="3xl" color="teal.400" fontWeight="bold" ml='16'>
      <Link href="/" paddingLeft="2">Real Estate</Link>
    </Box>
    <Hide below='2md'>
      <HStack mr='16' spacing='5'>
        <Link href="/search?purpose=for-rent" passHref>
          <Button variant='ghost' colorScheme='teal' w='20'>
            Rent
          </Button>
        </Link>
        <Link href="/search?purpose=for-sale" passHref>
          <Button variant='ghost' colorScheme='teal' w='20'>
            Buy
          </Button>
        </Link>
        <Link href='/search' passHref>
          <Button variant='outline' colorScheme='teal' leftIcon={<FaSearch />}>
            Search
          </Button>
        </Link>
      </HStack>
    </Hide>
    <Hide above='2md'>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<FaSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Hide>
  </Flex>

  // <Flex as='header' p="2" borderBottom="1px" borderColor="gray.100">
  //   <Box fontSize="3xl" color="blue.400" fontWeight="bold">
  //     <Link href="/" paddingLeft="2">
  //       Realtor
  //     </Link>
  //   </Box>
  //   <Spacer />
  //   <Box>
  //     <Menu>
  //       <MenuButton
  //         as={IconButton}
  //         icon={<FcMenu />}
  //         variant="outline"
  //         color="red.400"
  //       />
  //       <MenuList>
  //         <Link href="/" passHref>
  //           <MenuItem icon={<FcHome />}>Home</MenuItem>
  //         </Link>
  //         <Link href="/search" passHref>
  //           <MenuItem icon={<BsSearch />}>Search</MenuItem>
  //         </Link>
  //         <Link href="/search?purpose=for-sale" passHref>
  //           <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
  //         </Link>
  //         <Link href="/search?purpose=for-rent" passHref>
  //           <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
  //         </Link>
  //       </MenuList>
  //     </Menu>
  //   </Box>
  // </Flex>
);

export default Navbar;
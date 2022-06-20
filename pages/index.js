import Link from 'next/link';
import { Flex, Box, Text, Button, VStack } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property.jsx';

const Banner = ({
  title,
  desc,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Box
    mt='0'
    mb='20'
    w={'full'}
    h='50vh'
    backgroundImage={imageUrl}
    backgroundSize={'cover'}
    backgroundPosition={'center center'}
  >
    <VStack
      m='full'
      h='full'
      bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.300)'}
      align='center'
      justify='center'
      p='10'
      spacing='6'
    >
      <VStack spacing='4'>
        <Text
          color={'white'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={['xl', '2xl', '3xl', '4xl']}
        >
          {title}
        </Text>
        <Text
          color={'teal.200'}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={['xl', '2xl', '3xl', '4xl']}
        >
          {desc}
        </Text>
      </VStack>
      <Button
        p={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </VStack>
  </Box>
  // <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
  //   <Image src={imageUrl} width={500} height={300} alt={'banner'} />
  //   <Box p="5">
  //     <Text color="gray.500" fontSize="small" fontWeight="medium">
  //       {purpose}
  //     </Text>
  //     <Text fontSize="3xl" fontWeight="bold">
  //       {title1}
  //       <br />
  //       {title2}
  //     </Text>
  //     <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
  //       {desc1} <br /> {desc2}
  //     </Text>
  //     <Button fontSize="xl">
  //       <Link href={linkName}>{buttonText}</Link>
  //     </Button>
  //   </Box>
  //   {purpose}
  // </Flex>
);

const Home = ({ propertiesForRent, propertiesForSale }) => {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title="Rental Homes for Everyone"
        desc="Explore Apartments, Villas, Homes and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justify='space-evenly' mb='6'>
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title="Find, Buy & Own your Dream Home"
        desc="Explore Apartments, Villas, Homes and More"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap" justify='space-evenly' mb='6'>
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
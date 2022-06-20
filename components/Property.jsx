import Link from 'next/link';
import Image from 'next/image';
import { Box, Badge } from '@chakra-ui/layout';
import millify from 'millify';

import DefaultImage from '../assets/images/no-image.jpg';

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Box
      w={{
        base: '400px',
        lg: '300px',
        xl: '400px'
      }}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      mx='4'
      my='6'
    >
      <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width='400' height='260' />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {isVerified && 'verified'}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {rooms} rooms &bull; {baths} baths &bull; {millify(area)} sqft
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Box>

        <Box>
          {millify(price)}
          <Box as='span' color='gray.600' fontSize='sm'>
            / {rentFrequency}
          </Box>
        </Box>
      </Box>
    </Box>

    {/* <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {price}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex> */}
  </Link>
);

export default Property;
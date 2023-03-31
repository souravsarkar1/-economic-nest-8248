import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
  
  
  export default function NormalCard({id,color,img,original_price,discount,seeling_price,title,brand,link}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {brand}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'} color='green'>
              ₹ {seeling_price}
              </Text>
              <Text fontWeight={800} fontSize={'xl'} color='blue'>
               {`${discount}% discount`}
              </Text>
              
              <Text textDecoration={'line-through'} color={'red'} >
              ₹ {original_price}
              </Text>
              <Text fontWeight={800} fontSize={'xl'}>
              Color  {color}
              </Text>
            </Stack>
          </Stack>
          <Button><Link to={`/${link}/${id}`}>See More</Link></Button>
          <Button>Buy Now</Button>
          <Button>Add to Cart</Button>
        </Box>
      </Center>
    );
  }
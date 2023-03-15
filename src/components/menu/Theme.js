import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Theme = props => {
  let navigate = useNavigate();

  return (
    <>
      <Container id="menu-themes" maxW="2xl" my="2em">
        <SimpleGrid minChildWidth="250px" spacing="20px">

          <div onClick={ () => navigate('/donuts') }>
            <Center py={ 6 }>
              <Box
                w={ 'full' }
                bg={ useColorModeValue('white', 'gray.100') }
                boxShadow={ '2xl' }
                rounded={ 'md' }
                p={ 6 }
                overflow={ 'hidden' }
              >
                <Box
                  id="thumbnail"
                  className='donuts'
                  bg={ 'gray.100' }
                  mt={ -6 }
                  mx={ -6 }
                  mb={ 6 }
                  pos={ 'relative' }
                >
 
                </Box>
                <Stack>
                  <Heading
                    color={ useColorModeValue('#738dbb', '#738dbb') }
                    fontSize={ '1xl' }
                    fontFamily={ 'body' }
                    textTransform='uppercase'
                  >
                    { ' ' }
                    Donuts
                  </Heading>
                  <Text color={ 'gray.500' }> Classics </Text>
                </Stack>
              </Box>
            </Center>
          </div>

          <div onClick={ () => navigate('/specialties') }>
            <Center py={ 6 }>
              <Box
                w={ 'full' }
                bg={ useColorModeValue('white', '#ffefc8') }
                boxShadow={ '2xl' }
                rounded={ 'md' }
                p={ 6 }
                overflow={ 'hidden' }
              >
                <Box
                  id="thumbnail"
                  className='specialties'
                  bg={ 'gray.100' }
                  mt={ -6 }
                  mx={ -6 }
                  mb={ 6 }
                  pos={ 'relative' }
                >

                </Box>
                <Stack>
                  <Heading
                    color={ useColorModeValue('#e5c765', '#e5c765') }
                    fontSize={ '1xl' }
                    fontFamily={ 'body' }
                    textTransform='uppercase'
                  >
                    { ' ' }
                    Specialties
                  </Heading>
                  <Text color={ 'gray.500' }> Delicious specialty items.</Text>
                </Stack>
              </Box>
            </Center>
          </div>


          <div onClick={ () => navigate('/specials') }>
            <Center py={ 6 }>
              <Box
                w={ 'full' }
                bg={ useColorModeValue('white', '#f2e6f0') }
                boxShadow={ '2xl' }
                rounded={ 'md' }
                p={ 6 }
                overflow={ 'hidden' }
              >
                <Box
                  id="thumbnail"
                  className="specials"
                  bg={ '#f2e6f0' }
                  mt={ -6 }
                  mx={ -6 }
                  mb={ 6 }
                  pos={ 'relative' }
                >

                </Box>
                <Stack>
                  <Heading
                    color={ useColorModeValue('#d7b3d1', '#d574a3') }
                    fontSize={ '1xl' }
                    fontFamily={ 'body' }
                    textTransform='uppercase'
                  >
                    Donut Specials
                  </Heading>
                  <Text color={ 'gray.500' }>Grab a box to share.</Text>
                </Stack>
              </Box>
            </Center>
          </div>



          <div onClick={ () => navigate('/breakfast') }>
            <Center py={ 6 }>
              <Box
                w={ 'full' }
                bg={ useColorModeValue('white', '#9ed19e') }
                boxShadow={ '2xl' }
                rounded={ 'md' }
                p={ 6 }
                overflow={ 'hidden' }
              >
                <Box
                  id="thumbnail"
                  className='breakfast'

                  mt={ -6 }
                  mx={ -6 }
                  mb={ 6 }
                  pos={ 'relative' }
                >
                </Box>
                <Stack>
                  <Heading
                    color={ useColorModeValue('#98af98', 'white') }
                    fontSize={ '1xl' }
                    fontFamily={ 'body' }
                    textTransform='uppercase'
                  >
                    Baked Goods
                  </Heading>
                  <Text color={ 'gray.500' }>Sandwiches & more</Text>
                </Stack>
              </Box>
            </Center>
          </div>

        </SimpleGrid>
      </Container>
    </>
  );
};

export default Theme;

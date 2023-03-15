import React from 'react'
import { Stack, Text, Flex, VStack, useBreakpointValue, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      <div className="landing-container">
        <Flex
          w={ 'full' }
          h={ '100vh' }
          backgroundImage={
            'url(https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/flour-horizontal.jpg?alt=media&token=2bd7a9ea-fc8b-4c29-b6b5-1a9c9389e5cc)'
          }
          backgroundSize={ 'cover' }
          backgroundPosition={ 'center center' }>
          <VStack
            w={ 'full' }
            justify={ 'space-evenly' }
            px={ useBreakpointValue({ base: 4, md: 8 }) }
            bgGradient={ 'linear(to-r, blackAlpha.600, transparent)' }>

            <Stack maxW={ '2xl' } mt={ { base: "-7em", md: "-6em", lg: "-5em" } } align={ 'flex-start' } spacing={ 4 } color={ 'white' }>
              <motion.div
                transition={ { duration: 1.5, delay: .3 } }
                initial={ { opacity: 0, y: 50 } }
                animate={ { opacity: 1, y: 20 } }
                exit={ { opacity: 0 } }
              >
                <Text fontSize={ { base: "2em", md: "2.5em", lg: "3em" } } id="about-title">About Us</Text>
              </motion.div>
              <motion.div
                transition={ { duration: 1.5, delay: .6 } }
                initial={ { opacity: 0, y: 50 } }
                animate={ { opacity: 1, y: 20 } }
                exit={ { opacity: 0 } }
              >
                <Text mb="2" fontSize={ { base: 'sm', md: 'md', lg: 'lg' } }>
                  Our story began in 2018 when our founder, a self-taught baker, started traveling for R&D and experimenting until he finally perfected the recipe for the perfect doughnut - one that's fluffy, flavorful, and just the right amount of sweetness.
                  We take pride in using only the finest ingredients to create our doughnuts, from the buttery dough to the homemade glazes and toppings. We also offer a variety of flavors to suit all tastes, from classic glazed and chocolate to unique creations like maple bacon and fresh strawberry cream croissants.
                </Text>
                <Text fontSize={ { base: 'sm', md: 'md', lg: 'lg' } }>
                  Whether you're grabbing a quick breakfast on the go or stopping in for a morning treat, we guarantee that our donuts will satisfy your cravings.
                </Text>
              </motion.div>

              <motion.div
                transition={ { duration: 1, delay: .9 } }
                initial={ { opacity: 0, y: 50 } }
                animate={ { opacity: 1, y: 20 } }
                exit={ { opacity: 0 } }
              >
                <Stack direction={ 'row' }>

                  <Button
                    rounded={ 'lg' }
                    bg="cadetblue"
                    color={ 'white' }>
                    Order Online
                  </Button>
                  <Button
                    bg={ 'whiteAlpha.300' }
                    rounded={ 'lg' }
                    color={ 'white' }
                    _hover={ { bg: 'whiteAlpha.500' } }>
                    View Menu
                  </Button>
                </Stack>
              </motion.div>
            </Stack>

          </VStack>
        </Flex>
      </div>
    </>

  )
}

export default About
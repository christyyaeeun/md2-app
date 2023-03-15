import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"

const imageBg = {
    title: '',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/dough-vertical.jpg?alt=media&token=e3883b56-aad5-414c-ba95-d42c466bd045',
}

const Landing = () => {
    return (
        <>
            <div className="about">
                <Box id="about-left">
                    <div className="about-img">
                        <motion.div
                            transition={ { duration: 1, delay: .2 } }
                            initial={ { opacity: 0, y: 50 } }
                            animate={ { opacity: 1, y: 20 } }
                            exit={ { opacity: 0 } }
                        >
                            <img src={ imageBg.imageURL } />
                        </motion.div>
                    </div>
                    {/* <Text fontSize={ { base: "2em", md: "2.5em", lg: "3em" } } id="about-title">About Us</Text> */ }
                </Box>



                <Box id="about-right">
                    <motion.div
                        transition={ { duration: 1, delay: .2 } }
                        initial={ { opacity: 0, y: 50 } }
                        animate={ { opacity: 1, y: 20 } }
                        exit={ { opacity: 0 } }
                    >
                        <Stack maxW={ '2xl' } mt={ { base: "-7em", md: "-6em", lg: "-5em" } } align={ 'flex-start' } spacing={ 4 } color={ 'black' }>

                            <Text fontSize={ { base: "2em", md: "2.5em", lg: "3em" } } id="landing-title">About Us</Text>

                            <Text fontSize={ { base: 'sm', md: 'md', lg: 'lg' } }>
                                Our story began in 2018 when our founder, a self-taught baker, started traveling for R&D and experimenting until he finally perfected the recipe for the perfect doughnut - one that's fluffy, flavorful, and just the right amount of sweetness.
                                We take pride in using only the finest ingredients to create our doughnuts, from the buttery dough to the homemade glazes and toppings. We also offer a variety of flavors to suit all tastes, from classic glazed and chocolate to unique creations like maple bacon and fresh strawberry cream croissants.
                            </Text>
                            <Text fontSize={ { base: 'sm', md: 'md', lg: 'lg' } }>
                                Whether you're grabbing a quick breakfast on the go or stopping in for a morning treat, we guarantee that our donuts will satisfy your cravings.
                            </Text>
                        </Stack>
                    </motion.div>
                </Box>
            </div>
            <Box h="300px">

            </Box>
        </>
    )
}

export default Landing
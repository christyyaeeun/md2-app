import { Flex, Box, Image, Text, Heading, Button, chakra, SimpleGrid, Stat, StatLabel, useColorModeValue, StatNumber, Stack } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BdayCard from '../components/BdayCard';
import SlideShow from '../components/SlideShow';

interface ReviewCardProps {
    name: string;
    review: string;
}

function ReviewCard(props: ReviewCardProps) {
    const { name, review } = props;
    return (
        <motion.div
            transition={ { duration: 1, delay: .3 } }
            initial={ { opacity: 0, y: 50 } }
            animate={ { y: 0 } }
            whileInView={ { opacity: 1 } }
        >
            <Stat
                px={ { base: 4, md: 8 } }
                py={ '5' }
                shadow={ 'xl' }
                border={ '1px solid' }
                background="white"
                borderColor={ useColorModeValue('gray.800', 'gray.500') }
                rounded={ '2xl' }>
                <StatLabel fontWeight={ 'medium' } isTruncated>
                    { name }
                </StatLabel>
                <StatNumber fontSize={ 'md' } fontWeight={ 'medium' }>
                    { review }
                </StatNumber>
            </Stat>
        </motion.div>
    );
}


const Home = () => {
    return (
        <div className="homepage">
            <div className="hero">
                <div className="hero-container" >
                    <Flex className="hero-wrap">
                        <Box className="grid">
                            <motion.div transition={ { duration: 1, delay: .3 } } initial={ { opacity: 0 } } animate={ { opacity: 1 } }>
                                {/* <Image id="web-img" borderRadius="lg" src='https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/gourmet-horizontal.jpg?alt=media&token=a8075362-06ee-43f1-a9af-fc1fc5d51b2d'></Image> */}

                                <Image id="web-img" borderRadius="lg" src='https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/vdayhomepagehero.jpeg?alt=media&token=9e5347b4-8bdb-483e-85d3-8d6d754a6329'></Image>
                            </motion.div>

                            
                            <motion.div transition={ { duration: 1, delay: .3 } } initial={ { opacity: 0 } } animate={ { opacity: 1 } }>
                                {/* <Image id="mobile-img" borderRadius="lg" src='https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/gourmet-horizontal.jpg?alt=media&token=a8075362-06ee-43f1-a9af-fc1fc5d51b2d'></Image> */}

                                <Image id="mobile-img" borderRadius="lg" src='https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/landing-mobile.JPG?alt=media&token=f1011c94-a5a0-4507-bbfb-4f4bce21331d'></Image>
                            </motion.div>
                        </Box>
                        <Box className="grid-2" mb="2em">
                            <motion.div transition={ { duration: 2, delay: .5 } } initial={ { opacity: 0 } } animate={ { opacity: 1 } }>

                                <Stack spacing="2" mt="2">
                                    <Heading>Morning Donuts</Heading>
                                    <Text>Donuts, Coffee, and More.</Text>
                                    <Link to="/menu">
                                        <Button id="styled-btn" >
                                            View Menu
                                        </Button>
                                    </Link>
                                </Stack>
                            </motion.div>
                        </Box>
                    </Flex>
                </div>
            </div>

            <div className="review-container">
                <Box maxW="7xl" mx={ 'auto' } mt="2em" pt={ 5 } px={ { base: 2, sm: 12, md: 17 } }>
                    <chakra.h1
                        textAlign={ 'center' }
                        fontSize={ 'xl' }
                        py={ 10 }
                        fontWeight={ 'bold' }>
                        Words from our customers
                    </chakra.h1>

                    <SimpleGrid className="review-cards" columns={ { base: 1, md: 3 } } spacing={ { base: 5, lg: 8 } }>
                        <ReviewCard name={ 'Sudha M.' } review={ 'Best donuts in town. I’ve tried A lot of donuts and nothing compares. Not doughy, thick or dry. Just a good doughnut.' } />
                        <ReviewCard name={ 'Jules G.' } review={ 'This is my favorite place to get donuts in DFW. They’ve got a great variety to choose from.' } />
                        <ReviewCard name={ 'King W.' } review={ 'They have the best kolaches on this side of town and the customer service to top tier!' } />
                        <ReviewCard name={ 'Lakshmi Y.' } review={ 'These donuts are superior and the service is amazing. I love these people and will continue to order from them to satisfy those morning sweet cravings.' } />
                    </SimpleGrid>
                </Box>
            </div>

            <div className="product-section">
                <Box bg="#ffffff">
                    <BdayCard />
                </Box>
            </div>
            <SlideShow />
        </div>
    )
}

export default Home
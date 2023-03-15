import React from 'react'
import { motion } from 'framer-motion';
import {
    Container,
    Box,
    Heading,
    Text,
    SimpleGrid,
    Center,
    Img,
    useColorModeValue,
    Stack,
    Link,
} from '@chakra-ui/react';
import { MdLocationOn } from "react-icons/md";
import { BsClockFill } from "react-icons/bs"
import { PhoneIcon } from '@chakra-ui/icons';


const Contact = () => {
    return (
        <Container h="700px" maxW="1300px" mt={{base:"1em", md:"2em", lg:"3em"}} id="contact">
            <Container maxW="full" mt={ 0 } centerContent overflow="hidden" id="contact-container">
                <motion.div
                    transition={ { duration: 1.5, delay: .3 } }
                    initial={ { opacity: 0, y: 50 } }
                    animate={ { opacity: 1, y: 20 } }
                    exit={ { opacity: 0 } }
                >
                <SimpleGrid columns={ { base: 1, md: 2 } } spacing={ 10 } mt='2em' id="hero-grid">
                    <Stack spacing={ 4 }>
                        <Heading>Contact Us</Heading>
                        <Text color={ 'gray.500' } fontSize={ { sm: 'md', md: 'lg', lg: 'xl' } }>
                            If you placed an order with a third party vendor (DoorDash/UberEats/Postmates), and something has gone wrong, please reach out directly to the third party vendor for further assistance.
                        </Text>
                    </Stack>

                    <Center py={ 6 } mt="-3em">
                        <Box
                            w={ { sm: 'sm', md: 'lg', lg: 'xl' } }
                            rounded={ 'sm' }
                            my={ 5 }
                            mx={ [ 0, 5 ] }
                            overflow={ 'hidden' }
                            bg="white"
                            border={ '1px' }
                            borderColor="black"
                            boxShadow={ useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan') }>
                            <Box h={ '250px' } borderBottom={ '1px' } borderColor="black">
                                <Img
                                    src={
                                        'https://images.unsplash.com/photo-1646615077267-97c6088b74d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80'
                                    }
                                    roundedTop={ 'sm' }
                                    objectFit="cover"
                                    h="full"
                                    w="full"
                                    alt={ 'Blog Image' }
                                />
                            </Box>

                            <Box p={ 4 }>
                                <Heading color={ 'black' } fontSize={ 'xl' } mb=".2em">
                                    Didn't find what you were looking for?
                                </Heading>
                                <Box display="flex" alignItems="center">
                                    <MdLocationOn className="contact-icon" />
                                    <Link className="contact-info" target="blank" href='https://www.google.com/maps/place/8270+Abrams+Rd,+Dallas,+TX+75231/@32.8927245,-96.7405673,17z/data=!4m6!3m5!1s0x864ea0066fa393d3:0x785c7a870566fb61!8m2!3d32.8927245!4d-96.7405673!16s%2Fg%2F11cs9g6_r9' ml=".2em" mb=".2em" display="flex">
                                        8270 Abrams Rd, Dallas, TX 75231
                                    </Link>
                                </Box>

                                <Box display="flex" alignItems="center">
                                    <PhoneIcon className="contact-icon"  />
                                    <Link className="contact-info" href="tel:+14692060108" ml=".2em" target="blank" > (469)-206-0108</Link>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <BsClockFill className="contact-icon"  />
                                    <Text className="contact-info" ml=".2em">Mon - Sun 5:00 AM - 12:00 PM</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Center>
                </SimpleGrid>
</motion.div>
            </Container>
        </Container>
    )
}

export default Contact
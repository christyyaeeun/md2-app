import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Box,
    Flex,
    Stack,
    Text,
    IconButton,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
            <Box>
                <Flex
                    bg={ useColorModeValue('white', 'gray.800') }
                    minH={ '60px' }
                    py={ { base: 2 } }
                    px={ { base: 4 } }
                    borderBottom={ 1 }
                    borderStyle={ 'solid' }
                    borderColor={ useColorModeValue('gray.200', 'gray.900') }
                    align={ 'center' }>
                    <Flex
                        flex={ { base: 1, md: 'auto' } }
                        ml={ { base: -2 } }
                        display={ { base: 'flex', md: 'none' } }>
                        <IconButton
                            onClick={ onToggle }
                            icon={
                                isOpen ? <CloseIcon w={ 3 } h={ 3 } /> : <HamburgerIcon w={ 5 } h={ 5 } />
                            }
                            variant={ 'ghost' }
                            aria-label={ 'Toggle Navigation' }
                        />
                    </Flex>
                    <Flex flex={ { base: 1 } } justify={ { base: 'center', md: 'start' } }>
                        <Box bg="black" px="2">
                            <Text
                                textAlign={ useBreakpointValue({ base: 'center', md: 'left' }) }
                                fontFamily={ 'heading' }
                                fontWeight="900"
                                textTransform={ "uppercase" }
                                color={ useColorModeValue('white', 'black') }>
                                <Link to="/dashboard">MD</Link>
                            </Text>
                        </Box>

                        <Flex fontSize="large" fontWeight="700" display={ { base: 'none', md: 'flex' } } ml={ 10 }>
                            <nav className="nav-menu">
                                <UnorderedList listStyleType="none">
                                    <Stack direction="row" spacing="6">
                                        <ListItem><NavLink to="/">Home</NavLink></ListItem>
                                        <ListItem><NavLink to="/about">About</NavLink></ListItem>
                                        <ListItem><NavLink to="/menu">Menu</NavLink></ListItem>
                                        <ListItem><NavLink to="/contact">
                                            { ({ isActive }) => (
                                                <span>Contact</span>
                                            ) }
                                        </NavLink></ListItem>
                                    </Stack>
                                </UnorderedList>
                            </nav>
          
                        </Flex>
                    </Flex>

                    <Stack
                        flex={ { base: 1, md: 0 } }
                        justify={ 'flex-end' }
                        direction={ 'row' }
                        spacing={ 6 }>
                    </Stack>
                </Flex>

                <Collapse in={ isOpen } animateOpacity>


                    <UnorderedList listStyleType="none">
                        <Stack
                            direction="column"
                            spacing="4"
                            fontWeight="700"
                            fontSize="large"
                            bg={ useColorModeValue('white', 'gray.800') }
                            p={ 2 }
                            display={ { md: 'none' } }>
                            <ListItem><NavLink to="/">Home</NavLink></ListItem>
                            <ListItem><NavLink to="/about">About</NavLink></ListItem>
                            <ListItem><NavLink to="/menu">Menu</NavLink></ListItem>
                            <ListItem><NavLink to="/contact">Contact</NavLink></ListItem>
                        </Stack>

                    </UnorderedList>


                </Collapse>
            </Box>
    );


}




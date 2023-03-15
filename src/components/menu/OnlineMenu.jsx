import React from 'react'
import {
    SimpleGrid, Box, Text, Heading, Container, TableContainer, Table, Thead, Tr, Td, Th, Tbody,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'

function OnlineMenu() {
    return (
        <div className="online-menu">
            <Container pt="2em" maxW={ { base: '400px', md: '800px', lg: '1200px' } }>
                <Heading textAlign="center" mb="1em">Menu</Heading>
                <SimpleGrid minChildWidth='200px' columns={ { base: 1, md: 2, lg: 4 } } spacing='40px'>
                    <Box h="100%" py="2" bg="white" id="menu-1">
                        <Heading id="category-title">
                            Donuts
                        </Heading>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Glazed Donut</Td>
                                        <Td isNumeric>$0.99</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Chocolate Frosted</Td>
                                        <Td isNumeric>$1.19</Td>
                                    </Tr>

                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Topping Donut
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }

                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={ 4 }>
                                                                <Text> <Text as='b'>Topping: </Text>Cereal, Oreo, Peanut, Coconut</Text>
                                                            </AccordionPanel>
                                                        </>) }
                                                </AccordionItem>
                                            </Accordion>
                                        </Td>
                                        <Td isNumeric>$1.39</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Sprinkle Donut</Td>
                                        <Td isNumeric>$1.39</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Frosted Donut
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }
                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={ 4 }>
                                                                <Text> <Text as='b'>Flavors: </Text>Chocolate, Vanilla, Strawberry, Maplet</Text>
                                                            </AccordionPanel>
                                                        </>) }
                                                </AccordionItem>
                                            </Accordion></Td>
                                        <Td isNumeric>$1.29</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Twist Donut</Td>
                                        <Td isNumeric>$1.39</Td>
                                    </Tr>

                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Filled Donut
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }

                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={ 4 }>
                                                                <Stack spacing="3">
                                                                    <Text><Text as='b'>Flavors:</Text> Vanilla, Strawberry, Chocolate, Maple</Text>
                                                                    <Text><Text as='b'>Filling:</Text> Bavarian Cream, Raspberry, Lemon</Text>
                                                                </Stack>
                                                            </AccordionPanel>
                                                        </>) }
                                                </AccordionItem>
                                            </Accordion>
                                        </Td>
                                        <Td isNumeric>$1.99</Td>
                                    </Tr>


                                </Tbody>
                            </Table>
                        </TableContainer>

                        <Heading id="category-title">
                            Donut Holes
                        </Heading>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Dozen Glazed</Td>
                                        <Td isNumeric>$2.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Dozen Chocolate Frosted</Td>
                                        <Td isNumeric>$2.50</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Dozen Cinnamon Glazed</Td>
                                        <Td isNumeric>$2.50</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Dozen Cronut Holes</Td>
                                        <Td isNumeric>$6.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Dozen Sprinkle</Td>
                                        <Td isNumeric>$3.50</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>

                    </Box>
                    <Box h="100%" py="2" bg="white" id="menu-2">
                        <Heading id="category-title">
                            Baked Goods
                        </Heading>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Spinach Bistro</Td>
                                        <Td isNumeric>$3.29</Td>
                                    </Tr>

                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Sausage Roll
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }
                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={ 4 }>
                                                                <Text><Text as='b'>Options:</Text>Regular, Cheese</Text>
                                                            </AccordionPanel>
                                                        </>) }
                                                </AccordionItem>
                                            </Accordion>
                                        </Td>
                                        <Td isNumeric>$1.49</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Jumbo Sausage Roll
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }

                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={ 4 }>
                                                                <Text><Text as='b'>Options:</Text>Cheese, Jalapeno</Text>
                                                            </AccordionPanel>
                                                        </>) }
                                                </AccordionItem>
                                            </Accordion>
                                        </Td>
                                        <Td isNumeric>$3.39</Td>
                                    </Tr>


                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Croissant Sausage Roll
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }
                                                                </AccordionButton>
                                                            </h2>

                                                            <AccordionPanel pb={ 4 }>
                                                                <Text><Text as='b'>Options:</Text>Regular, add Bacon</Text>
                                                            </AccordionPanel>
                                                        </>
                                                    ) }
                                                </AccordionItem>
                                            </Accordion>
                                        </Td>
                                        <Td isNumeric>$1.59-$1.69</Td>
                                    </Tr>

                                    <Tr>
                                        <Td>Jumbo Croissant Sausage Roll</Td>
                                        <Td isNumeric>$3.89</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Sausage Egg & Cheese Burrito</Td>
                                        <Td isNumeric>$3.49</Td>
                                    </Tr>


                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Croissant Breakfast Sandwich
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }
                                                                </AccordionButton>
                                                            </h2>

                                                            <AccordionPanel pb={ 4 }>
                                                                <Stack spacing="3">
                                                                    <Text> <Text as='b'>Includes: </Text>Egg and Cheese</Text>
                                                                    <Text> <Text as='b'>Protein: </Text>Sausage, Bacon, Ham</Text>
                                                                </Stack>
                                                           
                                                            </AccordionPanel>
                                                        </>
                                                    ) }
                                                </AccordionItem>
                                            </Accordion>
                                        </Td>
                                        <Td isNumeric>$4.89</Td>
                                    </Tr>


                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Heading id="category-title">
                            Dozen Box
                        </Heading>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Dozen Glazed</Td>
                                        <Td isNumeric>$11.80</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Dozen Chocolate</Td>
                                        <Td isNumeric>$14.25</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Dozen Half Choco & Glaze</Td>
                                        <Td isNumeric>$13.00</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Dozen Mixed</Td>
                                        <Td isNumeric>$15.50</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box h="100%" py="2" bg="white" id="menu-3">
                        <Heading id="category-title">
                            Specialties
                        </Heading>

                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Cronut</Td>
                                        <Td isNumeric>$3.29</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Strawberries & Cream Croissant</Td>
                                        <Td isNumeric>$3.29</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Apple Fritter</Td>
                                        <Td isNumeric>$2.49</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Cinnamon Roll</Td>
                                        <Td isNumeric>$2.29</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Maple Bacon</Td>
                                        <Td isNumeric>$3.29</Td>
                                    </Tr>

                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Heading id="category-title">
                            Cake Donuts
                        </Heading>

                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Blueberry Cake</Td>
                                        <Td isNumeric>$1.79</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Double Chocolate Cake</Td>
                                        <Td isNumeric>$1.89</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Red Velvet Cake</Td>
                                        <Td isNumeric>$1.89</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Vanilla Cake</Td>
                                        <Td isNumeric>$1.29</Td>
                                    </Tr>

                                    <Tr>
                                        <Td>
                                            <Accordion allowToggle>
                                                <AccordionItem border="none">
                                                    { ({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton p="0" _expanded={ { bg: 'white', color: 'black' } } _hover={ { bg: 'white' } }>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        <Text fontSize="sm">
                                                                            Buttermilk Cake
                                                                        </Text>
                                                                    </Box>
                                                                    { isExpanded ? (<MinusIcon fontSize='12px' />) : (<AddIcon fontSize='12px' />) }

                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={ 4 }>
                                                                <Text><Text as='b'>Flavors: </Text>Glazed, Chocolate, Cinnamon Glaze</Text>
                                                            </AccordionPanel>
                                                        </>) }
                                                </AccordionItem>
                                            </Accordion></Td>
                                        <Td isNumeric>$1.79-$1.89</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>

                    {/* <Box h="100%" bg="white" id="menu-4">
                        <Heading id="category-title">
                            Donut Box
                        </Heading>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Item</Th>
                                        <Th isNumeric>Price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Spinach Bistro</Td>
                                        <Td isNumeric>$3.29</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Sausage Roll</Td>
                                        <Td isNumeric>$1.49</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Jumbo Sausage Roll</Td>
                                        <Td isNumeric>$3.39</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Croissant Sausage Roll</Td>
                                        <Td isNumeric>$1.59</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Jumbo Croissant Sausage Roll</Td>
                                        <Td isNumeric>$3.89</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Sausage Egg & Cheese Burrito</Td>
                                        <Td isNumeric>$3.49</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Croissant Breakfast Sandwhich</Td>
                                        <Td isNumeric>$4.89</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box> */}
                </SimpleGrid>
            </Container>

        </div>

    )
}

export default OnlineMenu
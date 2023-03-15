import React, { useState, useEffect } from 'react'
import { API } from 'aws-amplify';
import { listOrders } from '../graphql/queries';
import { Box, Text, Center, Flex, Stack, Heading, useColorModeValue, Container, Button, useDisclosure, Collapse } from '@chakra-ui/react'
import { deleteOrder as deleteOrderMutation } from '../graphql/mutations'

interface OrderCardProps {
    fName: string;
    lName: string;
    phone: string;
    letters: string;
    colors: string;
    details: string;
}

function OrderCard(props: OrderCardProps) {
    const { fName, lName, phone, letters, colors, details } = props;

    return (
        <Center py={ 6 }>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                direction={ { base: "column", md: "row" } }
                bg={ useColorModeValue('white', 'gray.900') }
                boxShadow={ '2xl' }
                w={ { base: '350px', md: '450px', lg: '500px' } }
                padding={ 4 }
            >
                <Stack flex={ 1 } flexDirection="column" justifyContent="space-evenly" alignItems="flex-start">
                    <Heading fontSize="md">Customer Details</Heading>
                    <Flex>
                        <Text as='b' mr=".3em">Name: </Text>
                        <Text> { fName + ' ' + lName }</Text>
                    </Flex>
                    <Flex>
                        <Text as='b' mr=".3em">Phone: </Text>
                        <Text> { phone }</Text>
                    </Flex>
                </Stack>
                <Stack
                    flex={ 1 }
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    p={ 1 }
                    pt={ 2 }
                >
                    <Heading fontSize="md">Order Details</Heading>
                    <Flex>
                        <Text as='b' mr=".3em">Letters: </Text>   <Text> { letters }</Text>
                    </Flex>
                    <Flex>
                        <Text as='b' mr=".3em">Colors: </Text>   <Text> { colors }</Text>
                    </Flex>
                    <Flex>
                        <Text as='b' mr=".3em">Details: </Text>   <Text> { details }</Text>
                    </Flex>
                </Stack>
            </Stack>
        </Center>
    )
}

function Dashboard() {
    const [ orders, setOrders ] = useState([]);
    const [ allOrders, setAllOrders ] = useState([]);
    const { getDisclosureProps, getButtonProps } = useDisclosure()
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
    const [ open, setOpen ] = useState(false);
    const { isOpen, onToggle } = useDisclosure()

    useEffect(() => {
        fetchOrders();
        getAllOrders()
    }, []);

    async function fetchOrders() {
        let orderData = await API.graphql({ query: listOrders });
        let ordersArray = orderData.data.listOrders.items;
        setOrders(ordersArray.filter(order => order._deleted !== true));
    }


    async function deleteOrder({ id, _version }) {
        const newArray = orders.filter(order => order.id !== id);
        setOrders(newArray);
        await API.graphql({
            query: deleteOrderMutation,
            variables: { input: { id, _version } },
        });
        console.log('new order', newArray);
    }

    async function getAllOrders() {
        let orderData = await API.graphql({ query: listOrders });
        let allOrdersArray = orderData.data.listOrders.items;
        setAllOrders(allOrdersArray);
    }



    const handleClick = () => {
        setOpen(!open);
        onToggle();
    };

    //     return (
    //         <>
    //             <Container h="100%">
    //                 { orders.map( order => (
    //                     <OrderCard key={ order.id } fName={ order.fName } lName={ order.lName } phone={ order.phone } letters={ order.letters } colors={ order.colors } details={ order.details } />
    //                     )
    //                 ) }
    //             </Container>
    //         </>
    //     )
    // }
    return (
        <>
            <Container h="100%" pb="2em">
                <Flex w={ { base: '350px', md: '450px', lg: '500px' } } justifyContent="flex-end">
                    <Button id="past-btn" onClick={ handleClick } mt="1em">{ open ? "Close" : "View Past Orders" }</Button>
                </Flex>
              

                <Collapse in={ isOpen }>
                    <Box>
                        <Heading mt="1em" fontSize="lg">Past Orders</Heading>

                        { allOrders.map((allOrder, i) => {
                            return (
                                <>
                                    <Flex color="gray.500" direction="column" mb="1.5em" w={ { base: '350px', md: '450px', lg: '500px' } }>
                                        <OrderCard key={ allOrder.id } fName={ allOrder.fName } lName={ allOrder.lName } phone={ allOrder.phone } letters={ allOrder.letters } colors={ allOrder.colors } details={ allOrder.details } />
                                    </Flex>
                                </>
                            )
                        }) }
                    </Box>
                </Collapse>
                {/* <Button onClick={handleClick} id="past-btn" mt="1em" { ...buttonProps }>{ active ? "View Past Orders" : "Close"}</Button> */}

                {/* <Box { ...disclosureProps }>
                    <Heading mt="1em" fontSize="lg">Past Orders</Heading>

                    { allOrders.map((allOrder, i) => {
                        return (
                            <>
                                <Flex color="gray.500" direction="column" mb="1.5em" w={ { base: '350px', md: '450px', lg: '500px' } }>
                                    <OrderCard key={ allOrder.id } fName={ allOrder.fName } lName={ allOrder.lName } phone={ allOrder.phone } letters={ allOrder.letters } colors={ allOrder.colors } details={ allOrder.details } />
                                </Flex>
                            </>
                        )
                    }) }
                </Box> */}
             
                <Box>
                    <Heading mt="1em" fontSize="lg">Current Orders</Heading>
                    { orders.map((order, i) => {
                        return (
                            <>
                                <Flex direction="column" mb="2em" w={ { base: '350px', md: '450px', lg: '500px' } }>
                                    <OrderCard key={ order.id } fName={ order.fName } lName={ order.lName } phone={ order.phone } letters={ order.letters } colors={ order.colors } details={ order.details } />
                                    <Button id="styled-btn" onClick={ () => deleteOrder(order) }>Delete Order</Button>

                                </Flex>
                            </>
                        )
                    }) }
                </Box>

            </Container>

        </>

    )
}
export default Dashboard
import React from 'react';
import {
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    WrapItem,
    Wrap,
    Container,
    Badge,
    Flex,
} from '@chakra-ui/react';

export const Breakfast = () => {
    return (
        <Container pt="2" maxW="7xl" as={ Stack } minChildWidth="280px">
            <Center mb="5">
                <Text fontSize="lg" color="gray.600">
                    Communication
                </Text>
            </Center>

            <Container centerContent maxW={ '7xl' }>
                <Wrap spacing="40px" justify="center">
                    <WrapItem>
                        <Center py={ 6 }>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={ { md: '100%', sm: '340px' } }
                                height={ { md: '18rem' } }
                                direction={ { base: 'column', sm: 'column', md: 'row' } }
                                bg={ useColorModeValue('white', 'gray.900') }
                                boxShadow={ '2xl' }
                                maxW={ '350px' }
                                padding={ 4 }
                            >
                                <Flex flex={ 1 } bg="gray.200">
                                    {/* <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={
                                ''
                            }
                        /> */}
                                </Flex>
                                <Stack
                                    flex={ 1 }
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={ 1 }
                                    pt={ 2 }
                                >
                                    <Heading
                                        fontSize={ '2xl' }
                                        fontFamily={ 'body' }
                                        color={ 'gray.500' }
                                        fontWeight={ '600' }
                                    >
                                        Card Topic
                                    </Heading>

                                    <Text
                                        textAlign={ 'center' }
                                        color={ useColorModeValue('gray.500', 'gray.100') }
                                        px={ 3 }
                                    >
                                        nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos
                                    </Text>
                                    <Stack
                                        align={ 'center' }
                                        justify={ 'center' }
                                        direction={ 'row' }
                                        mt={ 6 }
                                    >
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Tips
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Communication
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Love
                                        </Badge>
                                    </Stack>

                                    <Stack
                                        width={ '100%' }
                                        mt={ '2rem' }
                                        direction={ 'row' }
                                        padding={ 2 }
                                        justifyContent={ 'space-between' }
                                        alignItems={ 'center' }
                                    ></Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>

                    <WrapItem>
                        <Center py={ 6 }>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={ { md: '100%', sm: '340px' } }
                                height={ { md: '18rem' } }
                                direction={ { base: 'column', sm: 'column', md: 'row' } }
                                bg={ useColorModeValue('white', 'gray.900') }
                                boxShadow={ '2xl' }
                                maxW={ '350px' }
                                padding={ 4 }
                            >
                                <Flex flex={ 1 } bg="gray.200">
                                    {/* <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={
                                ''
                            }
                        /> */}
                                </Flex>
                                <Stack
                                    flex={ 1 }
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={ 1 }
                                    pt={ 2 }
                                >
                                    <Heading
                                        fontSize={ '2xl' }
                                        fontFamily={ 'body' }
                                        color={ 'gray.500' }
                                        fontWeight={ '600' }
                                    >
                                        Card Topic
                                    </Heading>

                                    <Text
                                        textAlign={ 'center' }
                                        color={ useColorModeValue('gray.500', 'gray.100') }
                                        px={ 3 }
                                    >
                                        nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos
                                    </Text>
                                    <Stack
                                        align={ 'center' }
                                        justify={ 'center' }
                                        direction={ 'row' }
                                        mt={ 6 }
                                    >
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Tips
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Communication
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Love
                                        </Badge>
                                    </Stack>

                                    <Stack
                                        width={ '100%' }
                                        mt={ '2rem' }
                                        direction={ 'row' }
                                        padding={ 2 }
                                        justifyContent={ 'space-between' }
                                        alignItems={ 'center' }
                                    ></Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>

                    <WrapItem>
                        <Center py={ 6 }>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={ { md: '100%', sm: '340px' } }
                                height={ { md: '18rem' } }
                                direction={ { base: 'column', sm: 'column', md: 'row' } }
                                bg={ useColorModeValue('white', 'gray.900') }
                                boxShadow={ '2xl' }
                                maxW={ '350px' }
                                padding={ 4 }
                            >
                                <Flex flex={ 1 } bg="gray.200">
                                    {/* <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={
                                ''
                            }
                        /> */}
                                </Flex>
                                <Stack
                                    flex={ 1 }
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={ 1 }
                                    pt={ 2 }
                                >
                                    <Heading
                                        fontSize={ '2xl' }
                                        fontFamily={ 'body' }
                                        color={ 'gray.500' }
                                        fontWeight={ '600' }
                                    >
                                        Card Topic
                                    </Heading>

                                    <Text
                                        textAlign={ 'center' }
                                        color={ useColorModeValue('gray.500', 'gray.100') }
                                        px={ 3 }
                                    >
                                        nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos
                                    </Text>
                                    <Stack
                                        align={ 'center' }
                                        justify={ 'center' }
                                        direction={ 'row' }
                                        mt={ 6 }
                                    >
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Tips
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Communication
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Love
                                        </Badge>
                                    </Stack>

                                    <Stack
                                        width={ '100%' }
                                        mt={ '2rem' }
                                        direction={ 'row' }
                                        padding={ 2 }
                                        justifyContent={ 'space-between' }
                                        alignItems={ 'center' }
                                    ></Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>

                    <WrapItem>
                        <Center py={ 6 }>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={ { md: '100%', sm: '340px' } }
                                height={ { md: '18rem' } }
                                direction={ { base: 'column', sm: 'column', md: 'row' } }
                                bg={ useColorModeValue('white', 'gray.900') }
                                boxShadow={ '2xl' }
                                maxW={ '350px' }
                                padding={ 4 }
                            >
                                <Flex flex={ 1 } bg="gray.200">
                                    {/* <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={
                                ''
                            }
                        /> */}
                                </Flex>
                                <Stack
                                    flex={ 1 }
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={ 1 }
                                    pt={ 2 }
                                >
                                    <Heading
                                        fontSize={ '2xl' }
                                        fontFamily={ 'body' }
                                        color={ 'gray.500' }
                                        fontWeight={ '600' }
                                    >
                                        Card Topic
                                    </Heading>

                                    <Text
                                        textAlign={ 'center' }
                                        color={ useColorModeValue('gray.500', 'gray.100') }
                                        px={ 3 }
                                    >
                                        nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos
                                    </Text>
                                    <Stack
                                        align={ 'center' }
                                        justify={ 'center' }
                                        direction={ 'row' }
                                        mt={ 6 }
                                    >
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Tips
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Communication
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Love
                                        </Badge>
                                    </Stack>

                                    <Stack
                                        width={ '100%' }
                                        mt={ '2rem' }
                                        direction={ 'row' }
                                        padding={ 2 }
                                        justifyContent={ 'space-between' }
                                        alignItems={ 'center' }
                                    ></Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>

                    <WrapItem>
                        <Center py={ 6 }>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={ { md: '100%', sm: '340px' } }
                                height={ { md: '18rem' } }
                                direction={ { base: 'column', sm: 'column', md: 'row' } }
                                bg={ useColorModeValue('white', 'gray.900') }
                                boxShadow={ '2xl' }
                                maxW={ '350px' }
                                padding={ 4 }
                            >
                                <Flex flex={ 1 } bg="gray.200">
                                    {/* <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={
                                ''
                            }
                        /> */}
                                </Flex>
                                <Stack
                                    flex={ 1 }
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={ 1 }
                                    pt={ 2 }
                                >
                                    <Heading
                                        fontSize={ '2xl' }
                                        fontFamily={ 'body' }
                                        color={ 'gray.500' }
                                        fontWeight={ '600' }
                                    >
                                        Card Topic
                                    </Heading>

                                    <Text
                                        textAlign={ 'center' }
                                        color={ useColorModeValue('gray.500', 'gray.100') }
                                        px={ 3 }
                                    >
                                        nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos
                                    </Text>
                                    <Stack
                                        align={ 'center' }
                                        justify={ 'center' }
                                        direction={ 'row' }
                                        mt={ 6 }
                                    >
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Tips
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Communication
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Love
                                        </Badge>
                                    </Stack>

                                    <Stack
                                        width={ '100%' }
                                        mt={ '2rem' }
                                        direction={ 'row' }
                                        padding={ 2 }
                                        justifyContent={ 'space-between' }
                                        alignItems={ 'center' }
                                    ></Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>

                    <WrapItem>
                        <Center py={ 6 }>
                            <Stack
                                borderWidth="1px"
                                borderRadius="lg"
                                w={ { md: '100%', sm: '340px' } }
                                height={ { md: '18rem' } }
                                direction={ { base: 'column', sm: 'column', md: 'row' } }
                                bg={ useColorModeValue('white', 'gray.900') }
                                boxShadow={ '2xl' }
                                maxW={ '350px' }
                                padding={ 4 }
                            >
                                <Flex flex={ 1 } bg="gray.200">
                                    {/* <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={
                                ''
                            }
                        /> */}
                                </Flex>
                                <Stack
                                    flex={ 1 }
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    p={ 1 }
                                    pt={ 2 }
                                >
                                    <Heading
                                        fontSize={ '2xl' }
                                        fontFamily={ 'body' }
                                        color={ 'gray.500' }
                                        fontWeight={ '600' }
                                    >
                                        Card Topic
                                    </Heading>

                                    <Text
                                        textAlign={ 'center' }
                                        color={ useColorModeValue('gray.500', 'gray.100') }
                                        px={ 3 }
                                    >
                                        nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos
                                    </Text>
                                    <Stack
                                        align={ 'center' }
                                        justify={ 'center' }
                                        direction={ 'row' }
                                        mt={ 6 }
                                    >
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Tips
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Communication
                                        </Badge>
                                        <Badge
                                            px={ 2 }
                                            py={ 1 }
                                            bg={ useColorModeValue('gray.50', 'gray.800') }
                                            fontWeight={ '400' }
                                        >
                                            #Love
                                        </Badge>
                                    </Stack>

                                    <Stack
                                        width={ '100%' }
                                        mt={ '2rem' }
                                        direction={ 'row' }
                                        padding={ 2 }
                                        justifyContent={ 'space-between' }
                                        alignItems={ 'center' }
                                    ></Stack>
                                </Stack>
                            </Stack>
                        </Center>
                    </WrapItem>
                </Wrap>
            </Container>
        </Container>
    );
};

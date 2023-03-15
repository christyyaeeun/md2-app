import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaUber } from 'react-icons/fa';
import { SiDoordash, SiUbereats } from "react-icons/si"

const Logo = (props: any) => {
    return (
        <img src='https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fmd-logo.png?alt=media&token=d7610cce-bea1-4336-a53a-490374e81192' />
    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={ useColorModeValue('blackAlpha.100', 'whiteAlpha.100') }
            rounded={ 'full' }
            w={{base:"10", md:"10", lg:"12"}}
            h={ { base: "10", md: "10", lg: "12" } }
            cursor={ 'pointer' }
            as={ 'a' }
            href={ href }
            display={ 'inline-flex' }
            alignItems={ 'center' }
            justifyContent={ 'center' }
            transition={ 'background 0.3s ease' }
            _hover={ {
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            } }>
            <VisuallyHidden>{ label }</VisuallyHidden>
            { children }
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={ '500' } fontSize={ 'lg' } mb={ 2 }>
            { children }
        </Text>
    );
};

export default function Footer() {
    return (
        <Box className="footer"
            py={ { base: 2 } }
            px={ { base: 4 } }
            borderTop={ 1 }
            borderStyle={ 'solid' }
            borderColor={ useColorModeValue('gray.200', 'gray.900') }
            bg={ useColorModeValue('white', 'gray.900') }
            color={ useColorModeValue('gray.700', 'gray.200') }>
            <Container as={ Stack } maxW={ '6xl' } py={{base:"6", md:"8", lg:"10"}}>
                <SimpleGrid
                    templateColumns={ { sm: '1fr 1fr', md: '2fr 1fr 2fr' } }
                    spacing={{base:"4", md:"6", lg:"8"}}>
                    <Stack spacing={{base:"4", md:"5", lg:"6"}}>
                        <Box maxW={{base:"40%", md:"50%", lg:"60%"}}>
                            {/* <Logo color={ useColorModeValue('gray.700', 'white') } /> */}
                        </Box>
                        <Text fontSize={ 'sm' }>
                            © 2023 JE & EJ Inc. II. All rights reserved
                        </Text>
                        <Stack className="social-btn" direction={ 'row' } spacing={ 6 }>
                            <SocialButton label={ 'UberEats' } href={ '#' }>
                                <SiUbereats className="social-icon" boxsize={{base:"1.2em", md:"1.3em", lg:"1.4em"}} />
                            </SocialButton>
                            <SocialButton label={ 'Uber' } href={ '#' }>
                                <FaUber className="social-icon" />
                            </SocialButton>
                            <SocialButton label={ 'DoorDash' } href={ '#' }>
                                <SiDoordash className="social-icon" />
                            </SocialButton>
                          
                        </Stack>
                    </Stack>
                    {/* <Stack align={ 'flex-start' }>
                        <ListHeader>Company</ListHeader>
                        <Link href={ '/about' }>About us</Link>
                        <Link href={ '/menu' }>Menu</Link>
                        <Link href={ '/contact' }>Contact us</Link>
                        
                    </Stack> */}
                    <Stack align={ 'flex-start' }>
                        <ListHeader>Contact</ListHeader>
                        <Link href="tel:+14692060108" ml=".2em" target="blank" > (469)-206-0108</Link>
                        <Link href="mailto:morningdonutsdalls@gmail.com">morningdonutsdallas@gmail.com</Link>
                    </Stack>
                    <Stack align={ 'flex-start' }>
                        <ListHeader>Address</ListHeader>
                        <Link target="blank" href='https://www.google.com/maps/place/8270+Abrams+Rd,+Dallas,+TX+75231/@32.8927245,-96.7405673,17z/data=!4m6!3m5!1s0x864ea0066fa393d3:0x785c7a870566fb61!8m2!3d32.8927245!4d-96.7405673!16s%2Fg%2F11cs9g6_r9' ml=".2em" fontSize={ 'lg' } mb=".2em" display="flex">
                            8270 Abrams Rd, Dallas, TX 75231
                        </Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
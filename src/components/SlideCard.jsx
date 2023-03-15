import {
    Flex,
    Box,
    Image,
    useColorModeValue,
    chakra,
    Text,
} from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

const data = {
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/bday-v2.JPG?alt=media&token=6435888f-5326-4db5-81a7-4fbe113e0725',
    name: 'Birthday Donuts',
};

function SlideCard() {

    return (
        <Flex p={ 50 } w="full" alignItems="center" justifyContent="center">
            <Box
                bg={ useColorModeValue('white', 'gray.800') }
                maxW="sm"
                rounded="xl"
                shadow="lg"
                position="relative">

                <Image
                    src={ data.imageURL }
                    alt={ `Picture of ${ data.name }` }
                    roundedTop="lg"
                />
                <Box p={ { base: '4', lg: '6' } }>
                    <Box d="flex" alignItems="baseline">
                        <chakra.h1
                            textAlign={ 'center' }
                            fontSize={ { base: 'lg', md: 'xl', lg: '2xl' } }
                            pb={ 2 }
                            fontWeight={ 'bold' }
                            textTransform="uppercase">
                            Birthday Donuts
                        </chakra.h1>
                        <Text>
                            Our 24-hour raised donut dough is hand cut into each letter and then topped in an assortment of our most popular flavors
                        </Text>
                     
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
}

export default SlideCard;
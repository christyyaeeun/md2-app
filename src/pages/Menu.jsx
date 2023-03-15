import React from 'react'
import { TabList, Tabs, TabPanel, Tab, TabPanels, Container, WrapItem, Center, Stack, Flex, Heading, useColorModeValue, Text, Image, Badge } from '@chakra-ui/react'


interface MenuCardProps {
  name: string;
  description: string;
  tag: string;
  imageURL: String;
}

function MenuCard(props: MenuCardProps) {
  const { name, description, tag, imageURL } = props;
  return (

    <WrapItem>
      <Center py={ 6 }>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={ { md: '100%', sm: '340px' } }
          height={ { base:'10rem',md: '12rem', lg:'14rem' } }
          direction="row"
          bg={ useColorModeValue('white', 'gray.900') }
          boxShadow={ '2xl' }
          maxW={ { base: '350px', md: '450px', lg:'500px'}}
          padding={ 4 }
        >
          <Flex flex={ 1 } bg="gray.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                imageURL
              }
            />
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
              fontSize={{base:'md', md:'lg'}}
              fontFamily={ 'body' }
              color={ 'gray.500' }
              fontWeight={ '600' }
              whiteSpace="nowrap"
            >
              { name }
            </Heading>

            <Text
              textAlign={ 'center' }
              color={ useColorModeValue('gray.500', 'gray.100') }
            
            >
              { description }
            </Text>
            <Badge
              px={ 2 }
              py={ 1 }
              bg={ useColorModeValue('gray.50', 'gray.800') }
              fontWeight={ '400' }
            >
              { tag }
            </Badge>
          </Stack>
            </Stack>
      </Center>
    </WrapItem>

  );
}
const Menu = () => {
  return (
    <>
      {/* <Theme /> */}
      <Container mt="4">
        <Tabs>
          <TabList>
            <Tab>Specials</Tab>
            <Tab>Donuts</Tab>
            <Tab>Specialties</Tab>
            <Tab>Baked Goods</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="specials-tab">
              <MenuCard name={ 'Dozen Glazed' } description={ 'A box of dozen glazed donuts.' } imageURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcard-classics.png?alt=media&token=7426b89f-4fab-4e03-b1a0-08b0e593f508' } />
              <MenuCard name={ 'Dozen Mixed' } description={ 'A box of dozen mixed donuts.' } imageURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcard-special.png?alt=media&token=2c24e1bb-04b0-4fdf-aae0-c9adc2de0e54' } />

            </TabPanel>
            <TabPanel className="donuts-tab">
              <MenuCard name={ 'Glazed Donut' } description={ 'Our classic donut with a sweet sugar glaze.' } imageURL={ 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/Glazed.png?alt=media&token=2f5349f6-1001-476e-8a2a-c36a654787c5' } />
              <MenuCard name={ 'Cinnamon Sugar Donut' } description={ 'Our classic donut covered our cinnamon sugar mix.' } imageURL={ 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/CinnSugar.png?alt=media&token=0bd0e42a-3f0a-4230-831c-844e4df88dca' } />
              <MenuCard name={ 'Chocolate Iced' } description={ 'Our classic donut with chocolate icing.' } imageURL={ 'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/Chocolate_Frosted_Donut.jpeg?alt=media&token=c1356af5-305e-47b9-a186-6aa40ce5846b' } />
              <MenuCard name={ 'Sprinkle' } imageURL={'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/Chocolate%20Sprinkle.png?alt=media&token=002ffa2d-6d67-4fe3-a230-44626fc02b28'} />
              <MenuCard name={ 'Double Chocolate' } tag={'cake'} imageURL={'https://firebasestorage.googleapis.com/v0/b/morning-donuts-d5e7f.appspot.com/o/doublechoco-cake.jpeg?alt=media&token=f8208fe7-743c-4c0f-8eb5-f9e6b754827a'} />
            </TabPanel>
            <TabPanel className="specialties-tab">
              <MenuCard name={ 'Strawberries & Cream' } description={ 'A croissant filled with fresh cream filling and slices of strawberries' } imageURL={'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcard-specialties.png?alt=media&token=e6e69dfd-afa6-42b6-9ad0-4e2fe4e5a4f5'} />
              <MenuCard name={ 'Cronut' } description={ 'A donut made from croissant dough with a sweet glaze.' } imageURL={'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcard-cronut.png?alt=media&token=2af1f7f1-5a6e-4a69-8efb-e61887d7ca9a'} />
              <MenuCard name={'Cinnamon Roll'} imageURL={'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Fcinnamonroll.jpg?alt=media&token=ec8788e1-82d6-4420-9fa6-8ee5c5b3be91'} />
              <MenuCard name={'Apple Fritter'} imageURL={'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/donuts%2Ffritter-cropped.JPG?alt=media&token=40a3864d-abcb-4305-8524-acef2bfd644f'} />
            </TabPanel>
            
            <TabPanel className="baked-tab">
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>

  )
}

export default Menu
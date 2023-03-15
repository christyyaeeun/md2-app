import React, { useState } from 'react';
import {
    Textarea,
    Input,
    Stack,
    Container,
    Box,
    Button,
    Heading,
    Flex,
    Spacer,
    Text,
    InputGroup,
    InputLeftAddon,
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
import { DataStore } from '@aws-amplify/datastore';
import { Order } from '../../models';

// const animatedComponents = makeAnimated();

// const colors = [
//     { label: "Pink", value: "pink" },
//     { label: "White", value: "white" },
//     { label: "Blue", value: "blue" },
//     { label: "Purple", value: "purple" },
//     { label: "Green", value: "green" },
//     { label: "Orange", value: "orange" },

// ];

const initialState = {
    fName: '', lName: '', phone: '', letters: '', colors: '', details: '',
}
function CreateOrder({ handleAddOrder }) {
    // const [ selectedColors, setSelectedColors ] = React.useState();
    const [ form, setForm ] = useState(initialState)
    const { onClose } = useDisclosure();
    const toast = useToast();


    // function handleSelectColors(data) {
    //     setSelectedColors(data);
    //     console.log(selectedColors)
    // }

    const submit = (e) => {
        e.preventDefault();
    }


    function onChangeText(e) {
        e.persist();
        setForm(currentState => ({
            ...currentState,
            [ e.target.name ]: e.target.value,
        }));
    }


    async function save() {
        try{
            const { fName, lName,phone, letters,colors, details } = form;
            if (!fName || !lName || !phone || !letters || !colors) return;
        setForm(currentState => ({ ...currentState, saving: true }));

            const orderData = { ...form }
            await DataStore.save(
                new Order({ ...form })
            );
            console.log('successfully created new post')
            onClose();
            setForm({ fName: '', lName: '', phone: '', letters: '', colors: '', details: '' })

        } catch (err) {
            console.log('error: ', err);
        }
    }

    async function create() {
        const orderData = { ...form }
        await DataStore.save(
            new Order({ ...form })
        );
        console.log('successfully created new post')
        onClose();
        setForm({ fName: '', lName: '', phone: '', letters: '', colors: '', details: '' })

    }


    return (
        <div className="order">
            <Container>
                <Flex mb="1">
                    <Box borderRadius="lg" >
                        <Stack spacing={ 3 } >

                            <Heading fontSize="lg">Customer Details</Heading>
                            <Box>
                                <FormControl isRequired>
                                    <Input
                                        value={ form.fName }
                                        onChange={ e => setForm({ ...form, 'fName': e.target.value }) }
                                        placeholder="First Name"
                                        size="md"
                                    />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl isRequired>
                                <Input
                                    value={ form.lName }
                                    onChange={ e => setForm({ ...form, 'lName': e.target.value }) }
                                    placeholder="Last Name"
                                    size="md"
                                />
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl isRequired>

                                <InputGroup>
                                    <InputLeftAddon children='+234' />
                                    <Input
                                        value={ form.phone }
                                        onChange={ e => setForm({ ...form, 'phone': e.target.value }) }
                                        type='tel' placeholder='phone number' />
                                </InputGroup>
                                </FormControl>
                            </Box>
                        </Stack>


                        <Stack spacing={ 3 } minW="350px">
                            <Heading fontSize="lg" mt="2.5em!important">Order Details</Heading>
                            <Text>Please note, all orders must be placed at least 24 hours in advanced before you pick-up.</Text>
                            <Box>
                                <FormControl isRequired>
                                    <FormLabel id="form-lable" htmlFor="letters">
                                        Letters
                                    </FormLabel>
                                    <Input
                                        value={ form.letters }
                                        onChange={ e => setForm({ ...form, 'letters': e.target.value }) }
                                        placeholder="e.g. 'Happy Bday John'"
                                        size="md"
                                    />

                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl isRequired>
                                    <FormLabel id="form-lable" htmlFor="letters">
                                        Colors
                                    </FormLabel>
                                    <FormHelperText mb=".5em">
                                        Please write "glaze" if you prefer no color. Otherwise, list 1-3 preferred colors.
                                    </FormHelperText>
                                    <Input
                                        value={ form.colors }
                                        onChange={ e => setForm({ ...form, 'colors': e.target.value }) }
                                        placeholder="e.g. 'Pink, White'"
                                        size="md"
                                    />
                                    {/* <Select
                                        closeMenuOnSelect={ false }
                                        components={ animatedComponents }
                                        defaultValue={ [] }
                                        isMulti
                                        placeholder="Colors"
                                        options={ colors }
                                        onChange={ handleSelectColors }
                                    /> */}
                                </FormControl>
                            </Box>

                            {/* <Box>
                                <FormControl>
                                    <RadioGroup defaultValue='1' onChange={ setValue } value={ form.value }>
                                        <Stack direction='row'>
                                            <FormLabel id="form-lable">Sprinkles</FormLabel>
                                            <Radio value='1'>Yes</Radio>
                                            <Radio value='2'>No</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>
                            </Box> */}




                            <Box>
                                <FormControl>
                                    <FormLabel id="form-lable">
                                        Additional Comments
                                    </FormLabel>
                                    <FormHelperText mb=".5em">
                                        If you'd like sprinkles, toppings, or any additional instructions, please include it below.
                                    </FormHelperText>
                                    <Textarea
                                        minH="100px"
                                        value={ form.details }
                                        onChange={ e => setForm({ ...form, 'details': e.target.value }) }
                                        placeholder="Write any additional comments"
                                        size="md"
                                    />
                                </FormControl>
                            </Box>
                            <Flex mb="1">
                                <Spacer />
                                <Button id="styled-btn" type="submit" size="md" onClick={ save }>
                                    save
                                </Button>
                         
                            </Flex>
                        </Stack>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
}

export default CreateOrder;
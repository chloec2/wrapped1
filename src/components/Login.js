import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

const Login = () => {
    let navigate = useNavigate();

    const onSubmit = () => {
        navigate('/dashboard', {replace: true})
    }
    return (
        <Flex
        minH={'90vh'}
        align={'center'}
        justify={'center'} >
        <Stack spacing={8} mx={'auto'} py={12} px={6}>
            <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log In to Wrapped1 </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool budgeting info!
            </Text>
            </Stack>
            <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                </FormControl>
                <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                </Stack>
                
                {/* <Link to="/dashboard"> */}
                    <Button
                        bg={'#004879'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.400',
                        }} 
                        onClick = {onSubmit}>
                        Sign in
                    </Button>
                {/* </Link> */}
                </Stack>
            </Stack>
            </Box>
        </Stack>
        </Flex>
    )
}

export default Login

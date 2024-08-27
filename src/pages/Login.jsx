import Logo from "../images/Logo.jpg"
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../context/authContext";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ViewOffIcon, ViewIcon, WarningTwoIcon} from '@chakra-ui/icons';
import { Box, Button,Card, CardBody, Center, FormControl, FormLabel, 
HStack, Heading, Image, Input, Stack, Text, VStack,
InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export function Login(){

    const colorBtn = useColorModeValue('light.tertiary', 'dark.secondary');
    const bgColor = useColorModeValue('ligh.secondary', 'dark.tertiary');
    const color = useColorModeValue('light.primary', 'dark.primary');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const { signin, errors: loginErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async(values) => {
        signin(values);
    };

    useEffect(() => {
        if(isAuthenticated) navigate('/');
    }, [isAuthenticated])

    return (
        <Box bg={bgColor} h='85vh'>
        
        <Center mt={24}>
        <Stack spacing="4">
        <VStack as="header" spacing="6">
            <Image src={Logo} h="70px" mt="6"/>
            <Heading
            bg={bgColor} 
            color={colorBtn}
            as="h1"
            fontWeight="300"
            fontSize="24px"
            letterSpacing="-0.5px">Sign to my Task List</Heading>
            </VStack>
            {
        loginErrors.map((error, i) => (
        <Center>
        <Alert status='error' 
               alignItems='center'
               justifyContent='center'
               textAlign='center'
               height='55px'
               w="320px"
               key={i}>
          <AlertIcon />
           <AlertTitle>{error}</AlertTitle>
        </Alert>
        </Center>))
        }
            <Card bg="#F5F5F5" borderRadius="0" maxW="400px">
            <CardBody bg={color}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="4">
                <FormControl >
                    <FormLabel 
                    bg={color} 
                    color={colorBtn}
                    size="sm" >Email address</FormLabel>
                    <Input 
                    type="email" 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"
                    {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, }) }
                    />
                    {errors.email && <Text fontSize='xs' color="red"><WarningTwoIcon/>Email is required</Text>}
                    <HStack justify="space-between">
                    <FormLabel 
                    size="sm"
                    bg={color} 
                    color={colorBtn} >Password</FormLabel>
                    <Button 
                    bg={color} 
                    color={colorBtn}
                    href="#" variant="link" size="xs">Forgot password?</Button>
                    </HStack>
                    <InputGroup>
                    <Input 
                    pr='4.5rem'
                    type={show ? 'text' : 'password'} 
                    bg="whithe" 
                    size="sm" 
                    borderRadius="0"
                    {...register("password", { required: true })}
                    />
                    <InputRightElement>
                    <Button fontSize='15px'
                      color={colorBtn} 
                      _hover={{
                      fontSize: '20px'
                      }} 
                      mb={2} 
                      h='1.5' size='xs' onClick={handleClick}>
                      {show ? <ViewOffIcon/> : <ViewIcon/>}
                      </Button>
                    </InputRightElement>
                    </InputGroup>
                    {errors.password && <Text fontSize='xs' color="red"><WarningTwoIcon/>Password is required</Text>}
                </FormControl>
                <Button type="submit"
                    borderRadius="0"
                    bg={colorBtn} 
                    color={color}
                    _hover={{
                      color: color,
                      bg: colorBtn,
                    }}>Sign in</Button>
                </Stack>
                </form>
            </CardBody>
            </Card>
            <Card variant="outline" borderRadius="0">
                <CardBody bg={color}>
                <Center>
                <HStack fontSize="sm" spacing="2">
                    <Text>
                    New in TaskList?   
                    </Text>
                    <Link to="/register">
                        <Text bg={color} 
                    color={colorBtn}>
                        Create an account{" "}
                        </Text>
                    </Link>
                </HStack>
                </Center>
                </CardBody>
            </Card>
            </Stack>
            </Center>
            <Center>
            <HStack as="footer" spacing="4" mt="10" pt="2">
                <Link isExternal href="#"><Text bg={bgColor} 
                color={colorBtn} fontSize="sm">Terms</Text></Link>
                <Link isExternal href="#"><Text bg={bgColor} 
                color={colorBtn}fontSize="sm">Privacy</Text></Link>
                <Link isExternal href="#"><Text bg={bgColor} 
                color={colorBtn} fontSize="sm">Security</Text></Link>
                <Link isExternal href="#"><Text fontSize="sm">Contact TaskList</Text></Link>
            </HStack>
            </Center>
        </Box>
    )
};


import Logo from "../images/Logo.jpg";
import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WarningTwoIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Box,
    Text,
    Button,
    Card,
    useColorModeValue,
    CardBody,
    Center,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Image,
    Input,
    Link,
    Stack,
    VStack,
    Alert,
    AlertIcon,
    AlertTitle,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";

export function Register() {
    const bgColor = useColorModeValue("light.secondary", "dark.tertiary");
    const colorBtn = useColorModeValue("light.tertiary", "dark.secondary");
    const color = useColorModeValue("light.primary", "dark.primary");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const onSubmit = async (values) => {
        try {
            await signup(values);
            navigate("/login"); // Redirige al usuario a la página de inicio de sesión después del registro
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Box bg={bgColor} mt={24} h="80vh">
            <Center>
                <Stack spacing="2">
                    <VStack as="header" spacing="4">
                        <Image src={Logo} h="70px" mt="6" />
                        <Heading
                            bg={bgColor}
                            color={colorBtn}
                            as="h1"
                            fontWeight="300"
                            fontSize="24px"
                            letterSpacing="-0.5px"
                            mb={4}
                        >
                            Register to my Task List
                        </Heading>
                    </VStack>
                    {registerErrors.map((error, i) => (
                        <Center>
                            <Alert
                                status="error"
                                alignItems="center"
                                justifyContent="center"
                                textAlign="center"
                                height="55px"
                                w="320px"
                                key={i}
                            >
                                <AlertIcon />
                                <AlertTitle>{error}</AlertTitle>
                            </Alert>
                        </Center>
                    ))}
                    <Card
                        bg="#F5F5F5"
                        variant="outline"
                        borderColor="#b1b1b1"
                        borderRadius="0"
                        maxW="380px"
                    >
                        <CardBody bg={color}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack spacing="4">
                                    <FormControl>
                                        <FormLabel
                                            bg={color}
                                            color={colorBtn}
                                            size="sm"
                                        >
                                            Username
                                        </FormLabel>

                                        <Input
                                            type="text"
                                            bg="whithe"
                                            size="sm"
                                            borderRadius="0"
                                            {...register("username", {
                                                required: true,
                                            })}
                                        />
                                        {errors.username && (
                                            <Text fontSize="xs" color="red">
                                                <WarningTwoIcon />
                                                Username is required
                                            </Text>
                                        )}

                                        <HStack justify="space-between">
                                            <FormLabel
                                                bg={color}
                                                color={colorBtn}
                                                size="sm"
                                            >
                                                Email address
                                            </FormLabel>
                                        </HStack>
                                        <Input
                                            type="email"
                                            bg="whithe"
                                            size="sm"
                                            borderRadius="0"
                                            {...register("email", {
                                                required: true,
                                                pattern:
                                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
                                            })}
                                        />
                                        {errors.email && (
                                            <Text fontSize="xs" color="red">
                                                <WarningTwoIcon />
                                                Email is required
                                            </Text>
                                        )}
                                        <HStack justify="space-between">
                                            <FormLabel
                                                bg={color}
                                                color={colorBtn}
                                                size="sm"
                                            >
                                                Password
                                            </FormLabel>
                                        </HStack>
                                        <InputGroup>
                                            <Input
                                                pr="4.5rem"
                                                type={
                                                    show ? "text" : "password"
                                                }
                                                bg="whithe"
                                                size="sm"
                                                borderRadius="0"
                                                {...register("password", {
                                                    required: true,
                                                })}
                                            />
                                            <InputRightElement>
                                                <Button
                                                    fontSize="15px"
                                                    color={colorBtn}
                                                    _hover={{
                                                        fontSize: "20px",
                                                    }}
                                                    mb={2}
                                                    h="1.5"
                                                    size="xs"
                                                    onClick={handleClick}
                                                >
                                                    {show ? (
                                                        <ViewOffIcon />
                                                    ) : (
                                                        <ViewIcon />
                                                    )}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        {errors.password && (
                                            <Text fontSize="xs" color="red">
                                                <WarningTwoIcon />
                                                Password is required
                                            </Text>
                                        )}
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        borderRadius="0"
                                        bg={colorBtn}
                                        color={color}
                                        _hover={{
                                            color: color,
                                            bg: colorBtn,
                                        }}
                                    >
                                        Register
                                    </Button>
                                </Stack>
                            </form>
                        </CardBody>
                    </Card>
                </Stack>
            </Center>
            <Center>
                <HStack as="footer" spacing="5" mt="10" pt="2">
                    <Link
                        isExternal
                        bg={bgColor}
                        color={colorBtn}
                        href="#"
                        fontSize="xs"
                    >
                        Terms
                    </Link>
                    <Link
                        isExternal
                        bg={bgColor}
                        color={colorBtn}
                        href="#"
                        fontSize="xs"
                    >
                        Privacy
                    </Link>
                    <Link
                        isExternal
                        bg={bgColor}
                        color={colorBtn}
                        href="#"
                        fontSize="xs"
                    >
                        Security
                    </Link>
                    <Link isExternal href="#" fontSize="xs">
                        Contact TaskList
                    </Link>
                </HStack>
            </Center>
        </Box>
    );
}

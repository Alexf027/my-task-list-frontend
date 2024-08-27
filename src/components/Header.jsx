import { Box, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

export function Header(){

    const heading = useColorModeValue('light.tertiary', 'dark.secondary');

    return (
    <Box m={3} justifyContent='start'>
    <VStack spacing={3}>
    <Heading color={heading}>Todo App</Heading>
    <Text fontSize='sm'>Meeting goals</Text>
    </VStack>
    </Box>
    )
}
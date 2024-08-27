import { Link } from "react-router-dom";
import derecha from "../images/derecha.png";
import izquierda from "../images/izquierda.png";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Text, Flex, Image, Card, Heading, CardFooter, Button, Stack, CardBody, Center, useColorModeValue } from "@chakra-ui/react";

export function Homepage() {

  const heading = useColorModeValue('light.tertiary', 'dark.secondary')
  const bgColor1 = useColorModeValue('light.secondary', 'dark.tertiary')
  const bgColor = useColorModeValue('white', 'dark.primary');
  const color = useColorModeValue('light.tertiary', 'dark.primary');
  const buttonColor1 = useColorModeValue('#eaebee', 'dark.secondary');

  return (
    <Center bg={bgColor1} h='full' w="100%">
    <Center mt={36} mb={12} w='70vw' >
      <Card bg={bgColor} 
        borderRadius='0'
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        w={{ base: '90%', md: '80%', lg: '70%', xl: '60%' }}>
        <Stack spacing={{ base: 4, md: 6 }} p={{ base: 4, md: 6 }}>
          <CardBody>
            <Heading color={heading} mb={4} textAlign='center' fontSize={{ base: 'xl', md: '3xl' }}>Welcome to TaskList</Heading>
            <Text py='2' fontSize={{ base: 'sm', md: 'md' }}>
            In this application, you will be able to manage your daily tasks in a simple and efficient way.<br/>
            Organize your to-dos, mark completed tasks and keep control of your daily activities in a practical way.<br/>
            Start increasing your productivity and keeping everything under control with our To Do List!<br/>
            We hope this tool helps you keep your life organized and allows you to focus on what really matters.<br/>
            Enjoy using our app and feel free to contact us if you have any suggestions or comments to improve it!
            Let's do it! 🚀
            </Text>
          </CardBody>
          <Flex justify='center'  direction={{ base: 'column', sm: 'row' }} align='center'>
            <Image h={{ base: '120px', md: '180px', lg: '250px' }} src={izquierda}/>
            <Image h={{ base: '120px', md: '180px', lg: '250px' }} src={derecha}/>
          </Flex>
          <CardFooter justify='center'>
            <Link to='/todoapp'>
              <Button 
                borderRadius='0'
                color={color}
                variant='solid' bg={buttonColor1}
                _hover={{
                transform: "translateX(10px)",
                bgGradient: "linear(to-r, color, dark.secondary)",
                boxShadow: "xl"
              }}>
                Get started <ArrowForwardIcon ml={3} />
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
      </Center>
    </Center>
  )
}

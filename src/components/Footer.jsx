import React from 'react';
import { Box, Flex, Link, Text, Image, HStack, Center, useColorModeValue, VStack} from '@chakra-ui/react';
import colombia from "../images/colombia.png";
import eeuu from "../images/estados-unidos-de-america.png";
import francia from "../images/francia.png";
import reino from "../images/reino-unido.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";

export const Footer = () => {

  const bgColor = useColorModeValue('#08376B', 'dark.primary'); 
  const color = useColorModeValue('white', 'dark.secondary');
  const secondaryBgColor = useColorModeValue('#eaebee', 'dark.secondary');

  return (
  <>
    <Box bg={bgColor} px={{ base: 4, md: 12 }} py={5} boxShadow="sm">
      <Flex justifyContent="space-between"  flexWrap="wrap">
        <Box flex="1 0 100%"  maxWidth="200px" ml={1} mb={6}>
          <Text color={color} fontSize="lg" fontWeight="bold" mb={2}>
          Helpful Links
          </Text>
          <VStack  
          spacing={4}
          align='stretch'>
          <Link color='white' href="#">Use of the Site</Link>
          <Link color='white' href="#">Select Country</Link>
          <Link color='white' href="#">Notice of Privacy</Link>
          <Link color='white' href="#">Terms and Conditions</Link>
          </VStack>
        </Box>
        <Box flex="1 0 100%" maxWidth="160px"  mb={6}>
          <Text color={color} fontSize="lg" fontWeight="bold" mb={2}>
          Social networks
          </Text>
          <VStack spacing={4}
          align='start'>
          <Center>
            <Image h="32px" src={Linkedin}/>
            <Link color='white' target='_blank' rel="noopener noferrer" href="https://www.linkedin.com/in/alexf027/">LinkedIn</Link>
          </Center> 
          <Center>
            <Image ml={1} mr={1}  h="28px" src={Github}/>
            <Link color='white' target='_blank' rel="noopener noferrer" href="https://github.com/Alexf027/Alexf027">GitHub</Link>
          </Center>
            <Center>
            <Image h="30px" ml={1} src={Instagram}/>
            <Link color='white' target='_blank' rel="noopener noferrer" href="https://www.instagram.com/alex.f207">Instagram</Link>
            </Center>
          </VStack>
        </Box>
        <Box maxWidth="225px" mb={3}>
          <Text color={color} mb={3} fontSize="lg" fontWeight="bold">
          Contact information
          </Text>
          <Text color='white' mb={3}>Phone: +57 3127949986</Text>
          <Text color='white' mb={3}>Email: alexfb.027@gmail.com</Text>
          <Text color='white'>Address: Carrera 93 #53-40, Med-CO</Text>
        </Box>
      </Flex>
    </Box>
    <Box bg={secondaryBgColor} >
      <Flex justify="space-between" p={{ base: 2, md: 2 }}>
      <HStack spacing={2}>
        <Image h="2vh" src={colombia}/>
        <Image h="2vh" src={eeuu}/>
        <Image h="2vh" src={reino}/>
        <Image h="2vh" src={francia}/>
      </HStack>
      <Text mr={2} fontSize={{ base: 'xs', md: 'sm' }} textAlign={{ base: 'center', md: 'right' }} color="#08376B">©2023 My Tasklist | Protalento | Ada School</Text>
      </Flex>
    </Box>
    </>
  );
};

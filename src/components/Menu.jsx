import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri"
import { BiSolidHomeSmile, BiTask } from "react-icons/bi"
import { Flex, Image, IconButton, Center, Avatar, useColorModeValue, Box } from "@chakra-ui/react";
import { DarkMode } from "../DarkMode";
import { HamburgerIcon, CloseIcon, InfoIcon } from "@chakra-ui/icons";
import Logo from '../images/Logo.jpg'
import { useState } from "react";
import Logo2 from '../images/Logo2.jpg'
import { useAuth } from "../context/authContext";
import { Profile } from "./Profile";

export function Menu() {

  const [display, changeDisplay] = useState("none");
  const { isAuthenticated, logout } = useAuth();

  const bgColor = useColorModeValue('#F5F5F5', 'dark.primary');
  const iconColor = useColorModeValue('light.tertiary','dark.secondary');
  const iconBgColor = useColorModeValue('#F5F5F5', 'dark.primary');

  return (
    <Flex bg={bgColor} justify="space-between" align="center" wrap="wrap">
    <Link  to='/'>
    <Image
      ml={[2, 6]} h={['60px', '85px']} w={['70px', '90px']} src={Logo} alt='Task List' />
      </Link>
    <Flex
     position={{ base: "fixed", md: "absolute" }}
      top='1rem'
      right='1rem'
      align='center'
      zIndex={20}>
    <DarkMode/>
    <Flex display={{ base: "none", md: "flex" }} ml={3} align="center">
    <Link to="/">
    <IconButton
    bg={iconBgColor}
    color={iconColor}
    borderRadius='0' 
      icon={<BiSolidHomeSmile size='2.2rem'/>}
    /></Link>     
    {isAuthenticated ? (
      <>
      <Link to="/todoapp">
          <IconButton 
          ml={4}
          borderRadius='0' 
          bg={iconBgColor}
          color={iconColor}
      icon={<BiTask size='2.2rem'/>}
    /></Link>
    <Link to="/tasks">
          <IconButton
          ml={4}
          borderRadius='0'  
          bg={iconBgColor}
          color={iconColor}
          icon={<FaClipboardList size='2rem'/>}
          />  
          </Link>
          <Link to="/about">
      <IconButton
        ml={4}
        borderRadius='0' 
        bg={iconBgColor}
        color={iconColor}
        icon={<InfoIcon fontSize='1.9rem'/>}
      /></Link>
      <Profile/>
      <Link to='/' onClick={() => {logout()}}>
      <IconButton 
      mr={2}
      ml={3}
      borderRadius='0'
      bg={iconBgColor}
      color={iconColor}
        icon={<RiLogoutBoxLine size='2rem'/>}
      />
      </Link>
      </>
    ) : (
      <>
      <Link to="/about">
      <IconButton
      mt={1}
        ml={4}
        borderRadius='0' 
        bg={iconBgColor}
        color={iconColor}
        icon={<InfoIcon fontSize="2rem"/>}
      /></Link>
    <Link to="/login">
    <IconButton
    mt={1}
    mr={2}
    ml={4}
    borderRadius='0'
    bg={iconBgColor}
    color={iconColor}
    icon={<RiLoginBoxLine size='2rem'/>}/>
    </Link>
      </>
    )}
    </Flex>
    <Center>
    <IconButton
     display={{ base: "flex", md: "none" }}
    ml={3}
    icon={display === "none" ? <HamburgerIcon mt={1} fontSize='2xl' /> : <CloseIcon mt={1} />}
    onClick={() => changeDisplay(display === "none" ? "flex" : "none")}
    bg={iconBgColor}
    color={iconColor}
    borderRadius='0'
    />
    </Center>
    </Flex>
    <Flex flexDir='column'
    overflowY='auto'
    >
    <Flex 
    direction="column"
        display={display}
        w="100vw"
        h="100vh"
        position="fixed"
        top={0}
        left={0}
        bg={bgColor}
        zIndex={10}
        overflowY="auto"
    >
    <Flex mb={2} justify='space-between'>
    <Link to='/'>
    <Image
    mt={4}
    ml={4}
    h='40px'
			src={Logo2} 
			alt='Todo App'/>
    </Link>
    </Flex>
    <Flex flexDir="column" align="center">
    <Link to="/">
    <IconButton
    mb={4}
    borderRadius='0' 
    bg={iconBgColor}
    color={iconColor}
    icon={<BiSolidHomeSmile size='2rem'/>}
    />
    </Link>
    {isAuthenticated ? (
      <>
    <Link to="/todoapp">
      <IconButton
        mb={4} 
        borderRadius='0' 
        bg={iconBgColor}
        color={iconColor}
        icon={<BiTask size='2.2rem'/>}
        />
        </Link>
        <Link to="/tasks">
        <IconButton
        mb={4}
        borderRadius='0'  
        bg={iconBgColor}
        color={iconColor}
        icon={<FaClipboardList size='2rem'/>}
        />  
          </Link>
          <Link to="/about">
      <IconButton
        mb={4}
        borderRadius='0' 
        bg={iconBgColor}
        color={iconColor}
        icon={<InfoIcon fontSize='2rem'/>}
      /></Link>
      <Box mr={3} mb={4}>
      <Profile />
      </Box>
      <Link to='/' onClick={() => {logout()}}>
      <IconButton 
      borderRadius='0'
      bg={iconBgColor}
      color={iconColor}
      icon={<RiLogoutBoxLine size='2rem'/>}
      />
      </Link>
          </>) : (
            <>
            <Link to="/about">
          <IconButton
          mb={4}
          borderRadius='0' 
          bg={iconBgColor}
          color={iconColor}
          icon={<InfoIcon fontSize='2rem'/>}
          />
          </Link>
          <Link to="/login">
    <IconButton
    borderRadius='0'
    bg={iconBgColor}
    color={iconColor}
    icon={<RiLoginBoxLine size='2rem'/>}/>
    </Link>
            </>)}
    </Flex>
    </Flex>
    </Flex>
  </Flex>
  )
};
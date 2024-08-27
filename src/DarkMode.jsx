import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <IconButton
      mt={1}
      borderRadius="0"
      color={isDarkMode ? 'light.primary' : 'light.primary'}
      bg={isDarkMode ? 'dark.primary' : 'light.primary'}
      icon={isDarkMode ? <SunIcon color='dark.secondary'/> : <MoonIcon color='light.tertiary'/>}
      onClick={toggleColorMode}
      _hover={{ color: '.primary', fontSize: "22px" }}
    />
  );
};

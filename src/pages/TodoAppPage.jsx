import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import {Header} from '../components/Header';
import {TaskList} from '../components/TaskList';

export function TodoAppPage() {

  const bgColor = useColorModeValue('light.primary', 'dark.primary');
  const bg = useColorModeValue('light.secondary', 'dark.tertiary')

  return (
    <Box  bg={bg} mt={14}>
    <Flex justify='center'  h='70vh'>
    <Box m={20} h='40vh' p={4}  bg={bgColor} boxShadow="xl">
    <Header/>
    <TaskList/>
    </Box>
    </Flex>
    </Box>
  );
}

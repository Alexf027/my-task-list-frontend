import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';
import { Card, Flex, Heading, VStack, Text, Center, Box,Button, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, ButtonGroup, IconButton, useColorModeValue, useToast } from '@chakra-ui/react';
import { useTasks } from '../context/TasksContext';
import { useDisclosure, AlertDialog } from '@chakra-ui/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { EditIcon } from '@chakra-ui/icons';

export const Task = ({ task }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();

    const { deleteTask, toggleTaskStatus } = useTasks();
    const toast = useToast();

    const heading = useColorModeValue('light.tertiary', 'dark.secondary');
    const iconColor = useColorModeValue('light.tertiary','dark.secondary');
    const iconBgColor = useColorModeValue('', 'dark.primary');
    const bgColor1 = useColorModeValue('light.secondary', 'dark.tertiary');
    const bgColor2 = useColorModeValue('light.primary', 'dark.tertiary');
    const color = useColorModeValue('light.primary', 'dark.primary');
    const bgColor3 = useColorModeValue('red.500', 'dark.secondary')

    const renderPriority = (priority) => {
      switch(priority) {
        case '🔥High':
          return <Text color={heading}>🔥High</Text>;
        case '⚠️Medium':
          return <Text color={heading}>⚠️Medium</Text>;
        case '🕒Low':
        default:
          return <Text color={heading}>🕒Low</Text>;
      }
    };
    
    const handleToggleStatus = () => {
      toggleTaskStatus(task._id, !task.completed) || toggleTaskStatus(task._id, task.completed);
      toast({
        title: task.completed ? "Task desmarcada as incomplete" : "Task marked as completed",
        status: 'info',
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    };
    
  return (<Center h='full' bg={bgColor1} >
    <Card w='full' m={4} maxW='md' bg={iconBgColor} borderRadius='0' p={2} 
    opacity={task.completed ? 0.5 : 1}
    boxShadow="xl">
    <Flex justify='space-between'>
    <VStack spacing={6}>
    <IconButton 
    size='lg'
    bg={iconBgColor}
    color={iconColor}
    icon={<CheckCircleIcon />} 
    onClick={handleToggleStatus}
    _hover={{ fontSize: "22px"}} />
    <Box>
    {renderPriority(task.priority)}
    </Box>
    </VStack>
    <VStack>
        <Heading
        color={heading}
        textDecoration={task.completed ? "line-through" : "none"}
         size='md'>{task.title}</Heading>
        <Text>{task.description}</Text>
        <Text>{new Date(task.date).toLocaleDateString()}</Text>
    </VStack>
        <ButtonGroup>
        <Link to={`/todoapp/${task._id}`}><IconButton 
        icon={<EditIcon />} 
        bg={iconBgColor}
        color={iconColor}
        _hover={{ fontSize: "22px" }}
      /></Link> 
            <IconButton 
            color='red'
            icon={<DeleteIcon/>}
            onClick={onOpen} 
            bg={iconBgColor}
            _hover={{fontSize: "22px"}}/>
            </ButtonGroup>
            <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            >
            <AlertDialogOverlay >
                <AlertDialogContent borderRadius='0' bg={bgColor2}>
                    <AlertDialogHeader fontSize='lg' color={heading} >
                    Delete Customer
                    </AlertDialogHeader>
                    <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose} borderRadius='0'>
                Cancel
              </Button>
              <Button color={color} _hover={{bg: bgColor3, transform: 'scale(1.05)'}} bg={bgColor3} onClick={() => deleteTask(task._id)} ml={3} borderRadius='0'>
                Delete
              </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
            </AlertDialog>
        </Flex>
    </Card>
    </Center>
  )
};
import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { Heading, Center, Box, useColorModeValue } from "@chakra-ui/react";
import { Task } from "../components/Task";

export const Taskspage = () => {

  const bgColor1 = useColorModeValue('light.secondary', 'dark.tertiary');
  const heading = useColorModeValue('light.tertiary', 'dark.secondary');

  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

 if(tasks.length === 0) return (<Box h="85vh" bg={bgColor1}><Center><Box  bg={bgColor1} color={heading} mt={24} h='100px' >
  <Heading color={heading} p={4} mt={4}>There are no tasks</Heading>
  </Box></Center></Box>);

  return (
    <Box pt={6} align="stretch" mt={24} w="100%" minH="80vh" bg={bgColor1}>
      {tasks.map(task => (
        <Task task={task} key={task._id} />
      ))}
    </Box>
  );
};

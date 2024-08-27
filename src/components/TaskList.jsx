import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Text, FormControl, Button, Input, Flex, Center, Box, Select, useColorModeValue, Spinner
} from "@chakra-ui/react";
import { AddIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function TaskList() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [priority, setPriority] = useState('');
  const { createTask, updateTask, getTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        setIsLoading(true);
        try {
          const fetchedTask = await getTask(params.id);
          if (fetchedTask) {
            setTask(fetchedTask);
            setValue('title', fetchedTask.title);
            setValue('description', fetchedTask.description);
            setPriority(fetchedTask.priority);
            setValue('date', dayjs.utc(fetchedTask.date).format());
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    }
    loadTask();
  }, [params.id, setValue, getTask]);

  const onSubmit = data => {
    const taskData = {
      ...data,
      priority: priority,
      date: dayjs.utc(data.date).format()
    };

    if (params.id) {
      updateTask(params.id, taskData);
    } else {
      createTask(taskData);
    }

    navigate('/tasks');
  };

  const color = useColorModeValue('light.tertiary', 'dark.secondary');
  const buttonColor1 = useColorModeValue('#eaebee', 'dark.primary');

  if (isLoading) {
    return <Center><Spinner /></Center>;
  }

  return (
    <Box m={6} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Flex mb={5}>
            <Center>
              <Input
                size='md'
                htmlSize={8}
                w='15rem'
                mr={2}
                name="title"
                type="text"
                placeholder="Add task"
                borderRadius="0"
                autoFocus
                sx={{ '::placeholder': { color: color } }}
                {...register("title", { required: true })}
              />
              {errors.title && (
                <Text fontSize="xs" color="red"><WarningTwoIcon />
                  Title is required
                </Text>
              )}
              <Input
                w="full"
                name="description"
                type="text"
                placeholder="Description"
                borderRadius="0"
                sx={{ '::placeholder': { color: color } }}
                {...register("description", { required: true })}
              />
              {errors.description && (
                <Text fontSize="xs" color="red"><WarningTwoIcon />
                  Description is required
                </Text>
              )}
            </Center>
          </Flex>
          <Center>
            <Select
              color={color}
              bg={buttonColor1}
              variant='filled'
              placeholder="Priority"
              borderRadius='0'
              mr='20px' m='full'
              onChange={(e) => setPriority(e.target.value)}
            >
              <option color={color} bg={buttonColor1} value='🔥High'>🔥High</option>
              <option value='⚠️Medium'>⚠️Medium</option>
              <option value='🕒Low'>🕒Low</option>
            </Select>
            <Flex>
              <Input
                color={color}
                w='15rem'
                mr='20px'
                borderRadius="0"
                placeholder="Select Date and Time"
                size='md'
                type="datetime-local"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <Text fontSize="xs" color="red"><WarningTwoIcon />
                  Date and time are required
                </Text>
              )}
              <Button
                type="submit"
                ml="3"
                borderRadius='0'
                color={buttonColor1}
                variant='solid' bg={color}
                _hover={{ boxShadow: "xl" }}
              >
                <AddIcon />
              </Button>
            </Flex>
          </Center>
        </FormControl>
      </form>
    </Box>
  );
};

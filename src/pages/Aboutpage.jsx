import { Text, Tabs, TabList, TabPanels, Box, Tab, TabPanel, List, ListItem, ListIcon, Flex, useColorModeValue } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons';

export function Aboutpage() {

  const bgColor = useColorModeValue('light.secondary', 'dark.tertiary');
  const bgTab = useColorModeValue('ligh.secondary', 'dark.secondary');
  const iconColor = useColorModeValue('light.tertiary','dark.secondary');
  const tabTextColor = useColorModeValue('light.tertiary', 'dark.primary');
  const tabSelectedBg = useColorModeValue('light.tertiary', 'dark.primary');
  const tabSelectedColor = useColorModeValue('light.primary', 'dark.secondary');

    return (
      <Tabs variant='unstyled' align='center' mt={24}>
      <Box>
        <TabList bg={bgTab} >
          <Tab color={tabTextColor} _selected={{ color: tabSelectedColor, bg: tabSelectedBg }}>About us</Tab>
          <Tab color={tabTextColor} _selected={{ color: tabSelectedColor, bg: tabSelectedBg }}>Functionalities</Tab>
          <Tab color={tabTextColor} _selected={{ color: tabSelectedColor, bg: tabSelectedBg }}>Used technology</Tab>
        </TabList>
        <TabPanels bg={bgColor} h='77vh'>
        <TabPanel>
        <Flex justify='center'>
        <Text height='300px' w='320px' mt='50px'>Our application was created with the aim of helping you organize your daily tasks in a simple and effective way.
          Whether you need to keep track of your to-dos at work, school, or your daily activities, our To-Do List is here to make it easy for you to manage your activities.</Text>
          </Flex>
          </TabPanel>
          <TabPanel>
            <List height='300px' w='370px' mt='50px' spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              Create new tasks and assign them a description.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon}
              color={iconColor}/>
              Mark tasks as complete once you've finished them.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              Edit or delete existing tasks.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              Display a to-do list to keep a clear track.
            </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
          <Text>
            Our app was built using the following technologies:
          </Text>
          <List height='300px' w='370px' mb='40px' mt='50px' spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              React: A JavaScript framework for building interactive user interfaces.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              React hook-form: is a form management library that makes management easy.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              React Router:A routing library to handle the different pages of the application.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              Chakra UI: A library of components and styles to design an attractive and responsive interface.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={iconColor}/>
              LocalStorage: We use the browser's local storage to save user tasks.
            </ListItem>
         </List>
         <Text>
         We hope you enjoy using our To Do List and that it helps you stay organized and productive in your daily activities!✅🎯
         </Text>
        </TabPanel>
      </TabPanels>  
      </Box>
    </Tabs> 
    
  );
};
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Menu } from './components/Menu';
import { Homepage } from './pages/Homepage';
import { Taskspage } from './pages/Taskspage';
import { Aboutpage } from './pages/Aboutpage';
import { Footer } from './components/Footer';
import { Errorpage } from './pages/Errorpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { AuthProvider } from './context/authContext';
import { TodoAppPage } from './pages/TodoAppPage';
import { ProtectedRoute } from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';

function App() {

	const bgColor = useColorModeValue('light.primary', 'dark.primary')

	return (
		<AuthProvider>
			<TaskProvider>
			<BrowserRouter>
			<Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bg={bgColor}
            h={{ base: "95px", md: "95px", lg: "95px", xl: "95px" }}
            zIndex="docked" 
            >
            <Flex justify='space-between' align="center" h="100%">
            <Menu/>
            </Flex>
            </Box>

			<Box bg='#EAEBEE' minH={{ base: '60vh', md: '70vh' }}>
				<Routes>
				    <Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
					<Route path='/' element={<Homepage/>}/>
					<Route path='/about' element={<Aboutpage/>}/>
					<Route path='*' element={<Errorpage/>}/>
					
				<Route element={<ProtectedRoute/>} >
					<Route path='/todoapp' element={<TodoAppPage/>}/>
					<Route path='/todoapp/:id' element={<TodoAppPage/>}/>
					<Route path='/tasks' element={<Taskspage/>} />
					<Route path='/tasks/:id' element={<Taskspage/>}/>
				</Route>
				</Routes>
			</Box>	
				<Footer/>
		</BrowserRouter>
	   </TaskProvider>
	</AuthProvider>
	)
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    light: {
      primary: '#f5f5f5',
      secondary: '#eaebee',
      tertiary: '#08376b',
    },
    dark: {
      primary: '#000000',
      secondary: '#00ffff',
      tertiary: '#1c1c1c',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
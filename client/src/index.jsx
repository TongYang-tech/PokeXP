import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { system } from '@chakra-ui/react/preset'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ChakraProvider value={system}>
    <App />
  </ChakraProvider>,
)

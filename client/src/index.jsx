import { ChakraProvider } from '@chakra-ui/react'
import { system } from "@chakra-ui/react/preset"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ChakraProvider value={system}>
    <App />
  </ChakraProvider>,
)

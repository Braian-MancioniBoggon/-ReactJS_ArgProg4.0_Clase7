import { ChakraProvider, Flex  } from '@chakra-ui/react'
import { Main } from './Pages/Main'

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  )
}

export default App

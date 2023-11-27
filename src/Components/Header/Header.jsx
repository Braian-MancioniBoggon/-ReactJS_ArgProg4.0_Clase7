import { Box, Flex, Heading, IconButton, Image, Input, InputGroup, InputLeftElement, VStack, useColorMode } from '@chakra-ui/react'
import {FaSun, FaMoon, FaSearch} from 'react-icons/fa'
import React from 'react'
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const esOscuro = colorMode === "dark"
    return(
        <VStack>
            <Box w="100%" display={{sm:"none", md:"block"}} position="fixed" zIndex="99">
                <Flex w="100%" alignItems="Center" justifyContent="space-between" bgGradient="linear(to-br, #7928CA, #623BE2)" color="white" h="60px"   p="5">
                    <Flex>
                        <Heading  size="md" fontWeight="semibold" color="cyan.400" display="flex" alignItems="center"   alignContent="center">
                            <Box><Image src='img/logo.png' alt='Compranding' w="100%" maxH="40px" /></Box>
                        </Heading>
                    </Flex>
                    <Flex>
                        <IconButton  ml="8" isRound='true' icon={esOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                    </Flex>
                </Flex>
            </Box>
            <Box w="100%" display={{sm:"block", md:"none"}} position="fixed" zIndex="99">
                <Flex w="100%" alignItems="Center" justifyContent="space-between" bg="#623BE2" color="white" h="60px"   p={{base:"3", sm:"5"}}>
                    <Image src='img/logo.png' alt='Compranding' w={{base: "50%", sm:"240px"}} maxW="240px" maxH="40px"/>
                    <Flex>
                        <IconButton  ml={{base:"3", sm:"8"}} isRound='true' icon={esOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                    </Flex>
                </Flex>
            </Box>
        </VStack>
    )
}

export { Header }
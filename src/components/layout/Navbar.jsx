
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { IoPersonSharp, IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import TimeDate from "./TimeDate";

import { ClientOnly, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "../ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu"

const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return ( 
        
            <Flex
              h="72px"
              px={6}
              align="center"
              justify="space-between"
              bg="whiteAlpha.100"
              color="black" >
            <TimeDate/>
                   
            <HStack spacing={4}>

                <ClientOnly fallback={<Skeleton boxSize="8" />}>
                  <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
                  </IconButton>
                </ClientOnly>

                <NavLink>
                    <IconButton
                        variant="ghost"
                        color="black"
                        aria-label="Settings"
                        fontSize="20px"
                        bg="gray.100"
                        _hover={{ bg: "gray.200" }}
                    >
                        <IoSettingsOutline /> 
                    </IconButton>
                </NavLink>
                <NavLink>
                    <IconButton
                        variant="ghost"
                        color="black"
                        aria-label="Profile"
                        fontSize="20px"
                        bg="gray.100"
                        _hover={{ bg: "gray.200" }}
                    >
                        <IoPersonSharp />
                    </IconButton>
                </NavLink>
                <Text  fontSize="sm" color="gray.500" >gupta.akriti022@gmail.com</Text>
            </HStack>
        </Flex>
     );
}
 
export default Navbar;
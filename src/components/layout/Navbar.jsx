import { Flex, Heading, HStack, Icon, IconButton, Spacer, Text } from "@chakra-ui/react";
import { IoPersonSharp, IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import TimeDate from "./TimeDate";

const Navbar = () => {
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
                <NavLink>
                    <IconButton
                        variant="ghost"
                        color="black"
                        aria-label="Settings"
                        fontSize="20px"
                        bg="gray.100"
                        _hover={{ bg: "grey.200" }}
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
                        _hover={{ bg: "grey.200" }}
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
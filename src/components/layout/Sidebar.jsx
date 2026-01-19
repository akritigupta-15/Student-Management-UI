import { Box, Container, HStack, Stack ,Text, Switch } from "@chakra-ui/react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { BsClipboardData } from "react-icons/bs";
import { IoIosHelpCircleOutline, IoIosLogOut } from "react-icons/io";
import { SiSemanticscholar } from "react-icons/si";

const Sidebar = () => {
    return ( 
        <Container w="250px" h="100vh" bg="gray.50" p={4} boxShadow="md">
            <Stack>

                <Box h="10"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <SiSemanticscholar size="24" color="blue"/>
                        <Text 
                           fontSize="x-large"
                           fontWeight="bold"
                           color="blue.500">MyStudyLife</Text>
                    </HStack> 
                </Box>

                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <GoHome/>
                        <Text fontSize="m">Dashboard</Text>
                    </HStack> 
                </Box>

                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <CiCalendarDate/>
                        <Text fontSize="m">Calendar</Text>
                    </HStack>
                </Box>

                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <HiMiniComputerDesktop/>
                        <Text fontSize="m">Activities</Text>
                    </HStack>
                </Box>

                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <MdOutlineTimer/>
                        <Text fontSize="m">Focus Timer</Text>
                    </HStack>
                </Box>

                <Box h="10"
                    alignContent="center"
                    borderRadius="md"
                >
                <HStack>
                <AiOutlineThunderbolt />
                  <Text fontSize="m" fontWeight="medium">
                   Try Premium Free
                  </Text>
                </HStack>
                </Box>

                <Box h="10"
                    bg="blue.500"
                    cursor="pointer"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    color="white"   
                    borderRadius="md"
                >
                <HStack>
                  <IoAddSharp />
                  <Text fontSize="m" fontWeight="medium">
                   Add New
                  </Text>
                </HStack>
                </Box>

                <Box h="10"
                    alignContent="center"
                    borderRadius="md"
                >
                <HStack>
                <LuCrown color="blue"/>
                  <Switch.Root size="sm">
                   <Switch.HiddenInput />
                   <Switch.Label>
                     <Text fontSize="medium" fontWeight="normal">
                       Dark Mode
                     </Text>
                   </Switch.Label>
                   <Switch.Control />
                    </Switch.Root>
                </HStack>
                </Box>

                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <BsClipboardData/>
                        <Text fontSize="m">Data import</Text>
                    </HStack>
                </Box>

                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <IoIosHelpCircleOutline/>
                        <Text fontSize="m">Help centre</Text>
                    </HStack>
                </Box>


                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <CiCalendarDate/>
                        <Text fontSize="m">Calender Sync</Text>
                        <LuCrown color="blue"/>
                    </HStack>
                </Box>

                <Box h="10"
                    _hover={{ bg: "blue.400" }}
                    cursor="pointer"
                    alignContent="center"
                    borderRadius="md"
                >
                    <HStack>
                        <IoIosLogOut/>
                        <Text fontSize="m">Log Out</Text>
                    </HStack>
                </Box>

            </Stack>
        </Container>
     );
}
export default Sidebar;
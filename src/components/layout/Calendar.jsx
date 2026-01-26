import { Button, HStack, Menu, Portal,Box,VStack,Text } from "@chakra-ui/react";
import { useState } from "react";

const Calendar = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

    const days = Array.from({length:7}).map((_,i)=>{
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        return d;   
    });
    return ( 
        <Box bg="white" p="4" borderRadius="lg">
            <HStack justify="space-between" mb="4">
                <Text fontWeight="semi-bold" fontSize="lg">
                    Calendar
                </Text>
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline" borderRadius="md">
                            Days
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                <Menu.Item value="Month">Month</Menu.Item>
                                <Menu.Item value="Week">Week</Menu.Item>
                                <Menu.Item value="Day">Day</Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            </HStack>

            <HStack spacing={3} mb={4}>
                {days.map((date) => {
                  const isSelected =
                  date.toDateString() === selectedDate.toDateString();

               return (
                 <VStack
                   key={date.toISOString()}
                   w="50px"
                   h="60px"
                   borderRadius="lg"
                   justify="center"
                   bg={isSelected ? "blue.500" : "gray.100"}
                   color={isSelected ? "white" : "black"}
                   cursor="pointer"
                   onClick={() => setSelectedDate(date)}
            >
                <Text fontSize="sm">
                 {date.toLocaleDateString("en-US", { weekday: "short" })}
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  {date.getDate()}
                </Text>
               </VStack>
            );
          })}
            </HStack>
        </Box>
    );
}

export default Calendar;
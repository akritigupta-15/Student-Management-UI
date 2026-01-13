import { Text, Stack, VStack } from "@chakra-ui/react";
import useDateTime from "../../hooks/useDateTime";
const TimeDate = () => {

    const now = useDateTime();

    const time = now.toLocaleTimeString([], {
         hour: '2-digit', 
         minute: '2-digit', 
        });

    const date = now.toLocaleDateString([], {
         year: 'numeric', 
         month: 'long', 
         day: '2-digit' 
        });    
    return ( 
        <VStack align="flex-start" spacing={0}>
      <Text fontSize="xl" fontWeight="semibold" lineHeight="1">
        {time}
      </Text>
      <Text fontSize="sm" color="whiteAlpha.800">
        {date}
      </Text>
    </VStack>
     );
}
 
export default TimeDate;
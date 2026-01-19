import { Text, Stack, HStack } from "@chakra-ui/react";
import useDateTime from "../../hooks/useDateTime";
const TimeDate = () => {

    const now = useDateTime();

    const time = now.toLocaleTimeString([], {
         hour: '2-digit', 
         minute: '2-digit', 
        });

    const date = now.toLocaleDateString([], {
         month: 'long', 
         day: '2-digit', 
         weekday: 'long'
        });    
    return ( 
         <HStack align="self-end" spacing={3}>
      {/* Big Time */}
      <Text
        fontSize="3xl"
        fontWeight="semibold"
        lineHeight="1"
        color="blackAlpha.800"
      >
        {time}
      </Text>

      {/* Date */}
      <Text
        fontSize="sm"
        fontWeight="medium"
        color="blackAlpha.800"
        mt="2px"
      >
        {date}
      </Text>
    </HStack>
     );
}
 
export default TimeDate;
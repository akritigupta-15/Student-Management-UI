import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const Dashboard = () => {
  return (
    <Flex h="100vh">
      <Sidebar />

      <Flex direction="column" flex="1">
        <Navbar />
        <Box p={4}>
          {/* Dashboard content */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;

import { Box, Card, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./FocusTimer.css";
import { IoMdPause } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { VscDebug, VscDebugRestart } from "react-icons/vsc";
import Calendar from "./Calendar";

export default function DashboardLayout() {
  const TOTAL_TIME = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isRunning, setIsRunning] = useState(false);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / TOTAL_TIME) * circumference;

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return TOTAL_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const StatCard = ({ icon,title,value}) => (
    <Box
      flex="1"
      bg="gray.100"
      borderRadius="xl"
      p="3"
      color="blue.800">
        <HStack spacing="10px">
            <Text fontSize="lg">{icon}</Text>
            <Text fontWeight="500">{title}</Text>
        </HStack>

        <Text fontSize="2xl" fontWeight="700" color="blue.500" alignItems="center">{value}</Text>

        <Text>Last 7 days</Text>

    </Box>
  )
  return (
    <HStack w="100%" spacing={4} align="start" p="4">
    <Box flex="1">
    <Box
      bg="gray.50"
      borderRadius="2xl"
      boxShadow="sm"
      p="3"
    >
      <Box
        bg="blue.400"
        borderRadius="xl"
        boxShadow="md"
        color="white"
      >
        <HStack align="center" p="10px" justify="space-between">
        <Box pl="24px">
          <VStack align="start" gap={1}>
            <Text>0 tasks due today</Text>
            <Text fontSize="xx-large" whiteSpace="nowrap">Good morning</Text>
          </VStack>
        </Box>

        <Box  boxShadow="md" >
          <div className="timer-card">
            <div className="ring-container">
              <svg width="200" height="200">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#e6f4ff"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  className="progress-ring"
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#4dabf7"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - progress}
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                />
              </svg>

              <div className="timer-text">
                <span className="label">Focus</span>
                <span className="time">{formatTime(timeLeft)}</span>
              </div>
            </div>

            <div className="controls">
              <button className="icon-btn"><IoSettingsSharp /></button>
              <button
                className="play-btn"
                onClick={() => setIsRunning((prev) => !prev)}
              >
                {isRunning ? <IoMdPause /> : <FaPlay />}
              </button>
              <button
                className="icon-btn"
                onClick={() => {
                  setIsRunning(false);
                  setTimeLeft(TOTAL_TIME);
                }}
              >
                <VscDebugRestart />
              </button>
            </div>
          </div>
        </Box>
      </HStack>
    </Box>  
      <Flex
        direction="row"
        mt="3"
        gap="2"
        justify="flex-start"
        maxW="900px"
        maxH="400px"
        flexWrap="wrap"
        >
            <StatCard
                icon="👀"
                title="Pending Tasks"
                value="12"
            />
            <StatCard
                icon="⏰"
                title="Overdue Tasks"
                value="3"
            />
            <StatCard
                icon="✅"
                title="Tasks Completed"
                value="45"
            />
            <StatCard
                icon="🔥"
                title="Your Streak"
                value="7 days"
            />
        </Flex>
    </Box>
    </Box>
    <Box w="320px" flexShrink={0}>
      <Calendar/>
    </Box>
    
    </HStack>
   
    
    
    
  );
}

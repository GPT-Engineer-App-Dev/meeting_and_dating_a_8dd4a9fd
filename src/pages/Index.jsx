import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Select, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaGoogle, FaMapMarkedAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [view, setView] = useState("home");
  const toast = useToast();

  const handleLogin = () => {
    // Simulate login process
    toast({
      title: "Logged in successfully.",
      description: "Welcome back!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setView("map");
  };

  const handleSignUp = () => {
    // Simulate sign up process
    toast({
      title: "Account created successfully.",
      description: "You can now enjoy all features.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setView("map");
  };

  const handleFreeBrowsing = () => {
    setView("browse");
  };

  const renderHome = () => (
    <VStack spacing={4}>
      <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={() => setView("signup")}>
        Sign-Up
      </Button>
      <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={() => setView("login")}>
        Member Login
      </Button>
      <Button leftIcon={<FaMapMarkedAlt />} colorScheme="blue" onClick={handleFreeBrowsing}>
        Free Browsing
      </Button>
    </VStack>
  );

  const renderSignUp = () => (
    <Flex direction="column" align="center" justify="center">
      <Heading mb={4}>Sign Up</Heading>
      <Input placeholder="Google Mail Address" mb={2} />
      <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleSignUp}>
        Sign Up with Google
      </Button>
    </Flex>
  );

  const renderLogin = () => (
    <Flex direction="column" align="center" justify="center">
      <Heading mb={4}>Member Login</Heading>
      <Input placeholder="Google Mail Address" mb={2} />
      <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleLogin}>
        Login with Google
      </Button>
    </Flex>
  );

  const renderBrowse = () => (
    <Box>
      <Heading mb={4}>Browse Events</Heading>
      <Text>Here you can see all the events for the next three days. Please sign up or log in to join or create events.</Text>
      {/* Map and event listing would go here */}
    </Box>
  );

  const renderMap = () => (
    <Box>
      <Heading mb={4}>Event Map</Heading>
      <Text>Welcome to the interactive event map. Here you can join or create your own events!</Text>
      {/* Interactive map and event controls would go here */}
    </Box>
  );

  return (
    <Stack minH="100vh" justify="center" align="center">
      {view === "home" && renderHome()}
      {view === "signup" && renderSignUp()}
      {view === "login" && renderLogin()}
      {view === "browse" && renderBrowse()}
      {view === "map" && renderMap()}
    </Stack>
  );
};

export default Index;

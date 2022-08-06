import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../assets/developer5.json";
const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <Box
      id="about"
      w="100%"
      position="relative"
      display="flex"
      bg={
        colorMode == "dark"
          ? "linear-gradient(rgb(42 6 74), rgb(27 6 46))"
          : "white"
      }
      flexWrap="wrap"
    >
      <Box width={{ base: "100%", md: "50%" }} display="flex">
        <Lottie h="100%" width="100%" options={defaultOptions} />
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize="4rem" m="3rem">
          About
        </Heading>
        <Text textAlign="justify" px="2rem" m="1rem" fontSize="1.6rem"></Text>
      </Box>
    </Box>
  );
}

export default About
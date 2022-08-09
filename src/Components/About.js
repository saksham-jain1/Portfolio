import { Box, Heading, List, ListIcon, ListItem, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../assets/developer5.json";
import {ImPointRight} from "react-icons/im"
import bg from '../assets/night2.jpg'

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
      backgroundImage={colorMode === "dark" ? bg : "white"}
      flexWrap="wrap"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bgAttachment="fixed"
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
        <Text
          textAlign="justify"
          px="2rem"
          m="1rem"
          fontSize="1.6rem"
        >
          Hii, I am Saksham Jain from Jhansi(U.P), India. I am a Tech
          Enthusiast. I love to code and learn different new Technologies.
          <br /> I am currently pursuing B. Tech from MediCaps University
          Indore. <br /> Apart from coding, some other activity that I love to
          do are:
          <List m="1.5rem">
            <ListItem
              bg="whiteAlpha.200"
              boxShadow="dark-lg"
              p=".3rem"
              m="1rem"
              borderRadius="xl"
            >
              <ListIcon as={ImPointRight} color="green.500" />
              Travelling
            </ListItem>
            <ListItem
              bg="whiteAlpha.200"
              boxShadow="dark-lg"
              p=".3rem"
              m="1rem"
              borderRadius="xl"
            >
              <ListIcon as={ImPointRight} color="green.500" />
              Playing Table Tennis
            </ListItem>
            <ListItem
              bg="whiteAlpha.200"
              boxShadow="dark-lg"
              p=".3rem"
              m="1rem"
              borderRadius="xl"
            >
              <ListIcon as={ImPointRight} color="green.500" />
              Spend time with family
            </ListItem>
          </List>
          <span style={{ fontStyle: "oblique" }}>
            "It's not what you achieve, it's what you overcome. That's what
            defines your career." &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Carlton
            Fisk
          </span>
        </Text>
      </Box>
    </Box>
  );
};

export default About
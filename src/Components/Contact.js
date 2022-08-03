import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../assets/contact-us-board.json";
import animationData1 from "../assets/contact-email.json";

const Contact = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const defaultOptions1 = {
      loop: true,
      autoplay: true,
      animationData: animationData1,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  return (
    <Box
      id="contact"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
    >
      <Heading w="100%" textAlign="center" fontSize="4rem" zIndex="1">
        Contact Me
      </Heading>
      <Box w={{ base: "100%", md: "50%" }} display="flex">
        <Lottie height="100%" w="100%" options={defaultOptions} />
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* <Lottie height="100%" w="100%" options={defaultOptions1} /> */}
      </Box>
    </Box>
  );
}

export default Contact
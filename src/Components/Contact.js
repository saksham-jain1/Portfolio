import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/contact-us-board.json";
import animationData1 from "../assets/contact-email.json";

const Contact = () => {
    const [loading, setLoading] = useState(false);
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
  const handleSend = () => {
    setLoading(true);
    setTimeout(() => {
        
        setLoading(false);
    }, 2000);
  }
  return (
    <Box
      id="contact"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      bg="orange.200"
    >
      <Heading mt="3rem" w="100%" textAlign="center" fontSize="4rem" zIndex="1">
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
        p="3rem"
      >
        { !loading ?
          <FormControl
            w="80%"
            justifyContent="center"
            display="flex"
            flexDir="column"
          >
            <Input
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              p="1rem"
              variant="flushed"
              my="1rem"
              size="lg"
              placeholder="Name"
            />
            <Input
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              p="1rem"
              variant="flushed"
              my="1rem"
              size="lg"
              type="email"
              placeholder="E-mail"
            />
            <Input
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              p="1rem"
              variant="flushed"
              my="1rem"
              size="lg"
              placeholder="Subject"
            />
            <Textarea
              boxShadow="dark-lg"
              borderRadius="lg"
              mb="3rem"
              bg="whiteAlpha.900"
              my="1rem"
              size="lg"
              placeholder="Write your message here"
            />
            <Button mt="2rem" colorScheme="teal" onClick={handleSend} >Send</Button>
          </FormControl>
        : <Lottie height="100%" w="100%" options={defaultOptions1} /> }
      </Box>
    </Box>
  );
};

export default Contact;

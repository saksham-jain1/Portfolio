import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/contact-us-board.json";
import animationData1 from "../assets/contact-email.json";
import emailjs from "@emailjs/browser";
import darkBg1 from "../assets/night6.jpg";

const Contact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const toast = useToast();
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
  const handleSend = async(e) => {
    e.preventDefault();
    console.log(form)
    setLoading(true);
    try {
        const response = await emailjs.sendForm(
          "service_62xxr8g",
          "template_d2zlyav",
          form.current,
          "8iveAGktHSBf_JWj6"
        );
        toast({
          title: "Mail Sent Successfully",
          description: "Thanks for contacting me",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the mail. Please try later",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Box
      id="contact"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      bg="teal.100"
      backgroundImage={colorMode === "dark" ? darkBg1 : ""}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bgAttachment="fixed"
    >
      <Heading mt="3rem" w="100%" textAlign="center" fontSize="4rem" zIndex="1">
        Contact Me
      </Heading>
      <Box w={{ base: "100%", md: "50%" }} display="flex">
        <Lottie options={defaultOptions} />
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="2rem"
      >
        {!loading ? (
          <form
            ref={form}
            onSubmit={handleSend}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              color: "black",
            }}
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
              name="name"
              isRequired
              _placeholder={{ color: "black", opacity: ".6" }}
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
              name="email"
              isRequired
              _placeholder={{ color: "black", opacity: ".6" }}
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
              name="subject"
              _placeholder={{ color: "black", opacity: ".6" }}
            />
            <Textarea
              boxShadow="dark-lg"
              borderRadius="lg"
              bg="whiteAlpha.900"
              my="1rem"
              size="lg"
              placeholder="Write your message here"
              height="150px"
              name="message"
              isRequired
              _placeholder={{ color: "black", opacity: ".6" }}
            />
            <Button
              mt="2rem"
              boxShadow="dark-lg"
              size="lg"
              fontSize="1.6rem"
              colorScheme="blue"
              type="submit"
            >
              Send
            </Button>
          </form>
        ) : (
          <Lottie height="100%" w="100%" options={defaultOptions1} />
        )}
      </Box>
    </Box>
  );
};

export default Contact;

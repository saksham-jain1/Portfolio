import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Tilty from "react-tilty";
import "../index.css";

const Card = ({ data }) => {
  const img =
    "https://github.com/saksham-jain1/Portfollio/blob/main/src/assets/bg1.jpg?raw=true";
  const link = "https://lottiefiles.com/36418-cecil-portfolio-background";
  return (
    <Tilty
      perspective="3000"
      speed="1000"
      glare="true"
      style={{ margin: "1.5rem" }}
    >
      <Box
        h="500px"
        w="360px"
        bg="whiteAlpha.700"
        flex="0 0 auto"
        borderRadius="xl"
        style={{ boxShadow: "-6px -6px 18px 5px #111" }}
      >
        <Img src={img} borderRadius="xl" h="250px" />
        <Box w="100%" h="250px" p="1rem" position="relative">
          <Heading textAlign="center" mt="-250px" mb="220px" color="wheat">
            Project Name
          </Heading>
          <Text fontSize="1.2rem">Detail</Text>
          <Box
            w="100%"
            display="flex"
            justifyContent="space-evenly"
            position="absolute"
            bottom="0"
            left="0"
            borderRadius="xl"
            py="1rem"
            bg="gray.400"
          >
            <a href={link}>
              <Button w="100%" colorScheme="teal">
                <BsGithub />
                &nbsp; Source Code
              </Button>
            </a>
            <a href={link}>
              <Button w="100%" colorScheme="teal">
                <BiLinkExternal /> &nbsp; Live
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Tilty>
  );
};

export default Card;

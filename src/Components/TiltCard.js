import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Tilty from "react-tilty";
import "../index.css";

const TiltCard = ({ data }) => {
  return (
    <Tilty
      perspective="3000"
      speed="1000"
      glare="true"
      style={{ margin: "1.5rem" }}
    >
      <Box
        h="600px"
        w="340px"
        bg="whiteAlpha.700"
        flex="0 0 auto"
        borderRadius="xl"
        style={{ boxShadow: "-6px -6px 18px 5px #000" }}
      >
        <Box p="1rem" h="200px">
          <Image src={data.img} alt={data.name} borderRadius="xl" />
        </Box>
        <Box w="100%" h="400px" pt="1rem" position="relative">
          <Heading textAlign="center" mb=".5rem" color="blackAlpha.700">
            {data.name}
          </Heading>
            <Text
              px="1rem"
              fontSize="1.2rem"
              display="flex"
              flexWrap="wrap"
              textAlign="justify"
              color="blackAlpha.900"
            >
              {data.detail}
            </Text>
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
            <a href={data.link1}>
              <Button w="100%" colorScheme="teal">
                <BsGithub />
                &nbsp; Source Code
              </Button>
            </a>
            {data.link2 && (
              <a href={data.link2}>
                <Button w="100%" colorScheme="teal">
                  <BiLinkExternal /> &nbsp; Live
                </Button>
              </a>
            )}
          </Box>
        </Box>
      </Box>
    </Tilty>
  );
};

export default TiltCard;

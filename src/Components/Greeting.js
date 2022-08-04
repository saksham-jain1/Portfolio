import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import Resume from "../assets/Sakshams Resume.pdf";

const Greeting = () => {
  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      my="3rem"
      color="whiteAlpha.700"
    >
      <Heading fontSize="3rem">Hey Visitors</Heading>
      <Text p="2rem" textAlign="justify" m="1rem" fontSize="1.6rem">
        I am a Pre-final year Student Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptate, vel! Aspernatur qui eius placeat, aliquid
        commodi dolorem eaque deserunt quo laudantium repellendus adipisci sunt
        porro optio quae possimus quasi, aut dolor veritatis.
      </Text>
      <a href={Resume} download="Saksham's Resume">
        <Button mt="1rem" colorScheme="teal" p="1.4rem" fontSize="1.6rem">
          Download Resume
        </Button>
      </a>
    </Box>
  );
}

export default Greeting
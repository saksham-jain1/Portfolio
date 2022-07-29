import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const Greeting = () => {
  return (
    <Box
      width={{ base: "100%", md: "50%" }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      my="5rem"
      color="whiteAlpha.700"
    >
      <Heading>Hey Visitors</Heading>
      <Text m="5" fontSize="1.6rem">
        I am a Pre-final year Student Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptate, vel! Aspernatur qui eius placeat, aliquid
        commodi dolorem eaque deserunt quo laudantium repellendus adipisci sunt
        porro optio quae possimus quasi, aut dolor veritatis.
      </Text>
    </Box>
  );
}

export default Greeting
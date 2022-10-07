import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import Resume from "../assets/Sakshams Resume.pdf";
import '../index.css'

const Greeting = () => {
  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      my="3rem"
      color="whiteAlpha.800"
    >
      <Heading fontSize="3rem">
        Hey Visitors <span className="waving">👋🏻</span>
      </Heading>
      <Text p="2rem" textAlign="justify" m="1rem" fontSize="1.6rem">I am a final year B.Tech Student who is placed in one of the leading company Principal Global with a package of 8 Lakhs with dheela saksham jain dhar and bechan prakhar jain aashta and one unplaced abhishek and naman waiting for placement yet. This my portfollio website you can explore more about me on this.</Text>
      <a href={Resume} download="Saksham's Resume">
        <Button mt="1rem" colorScheme="green" p="1.4rem" fontSize="1.6rem">
          Download Resume
        </Button>
      </a>
    </Box>
  );
}

export default Greeting

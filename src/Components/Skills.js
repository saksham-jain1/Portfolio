import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <Box
      id="skills"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      py="3rem"
    >
      <Heading textAlign="center" width="100%" mb="1rem" fontSize="4rem">
       Skills
      </Heading>
      <Box w="100%" display="flex"></Box>
    </Box>
  );
}

export default Skills
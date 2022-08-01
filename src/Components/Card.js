import { Box, Button, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import img from "../assets/bg1.jpg"
import { BiLinkExternal } from "react-icons/bi"
import { BsGithub } from "react-icons/bs";

const Card = ({data}) => {
  const link = "https://lottiefiles.com/36418-cecil-portfolio-background";
  return (
    <Box
      h="500px"
      w="360px"
      m="1rem"
      bg="whiteAlpha.700"
      flex="0 0 auto"
      borderRadius="xl"
      style={{ boxShadow: "-6px -6px 18px 5px #111" }}
    >
      <Img borderRadius="xl" src={img} h="250px" />
      <Box w="100%" h="250px" p="1rem" position="relative">
        <Heading textAlign="center" mt="-250px" mb="220px" color="wheat">
          Project Name
        </Heading>
        <Text fontSize="1.2rem">Detail</Text>
        <Box
          w="90%"
          display="flex"
          justifyContent="space-evenly"
          position="absolute"
          bottom="1rem"
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
  );
}

export default Card
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const GyroCard = ({data}) => {
  return (
    <Box
      h="600px"
      w="340px"
      bg="whiteAlpha.700"
      m="1.5rem"
      flex="0 0 auto"
      borderRadius="xl"
      style={{ boxShadow: "-6px -6px 18px 5px #000" }}
    >
      <Box p="1rem" h="200px">
        <Image src={data.img} borderRadius="xl" />
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
  );
}

export default GyroCard
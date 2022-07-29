import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'
// import Lottie from 'react-lottie';
// import animationData from "../assets/developer1.json";
const About = () => {
      // const defaultOptions = {
      //   loop: true,
      //   autoplay: true,
      //   animationData: animationData,
      //   rendererSettings: {
      //     preserveAspectRatio: "xMidYMid slice",
      //   },
      // };
  return (
    <Box w="100%" position="relative" display="flex" flexWrap="wrap">
      <Box width={{ base: "100%", md: "50%" }} display="flex">
        {/* <Lottie options={defaultOptions} /> */}
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          fontSize="3rem"
          m="3rem"
          color="blue.600"
          textDecoration="underline"
        >
          About
        </Heading>
        <Text textAlign="justify" px="2rem" m="1rem" fontSize="1.6rem">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nemo cupiditate ut omnis, perspiciatis doloribus vel itaque corporis
          iusto sapiente, similique sit nisi? Nihil commodi perferendis nulla
          praesentium at cumque laborum, facilis error natus eveniet minima
          voluptatem ab quis iusto consequuntur a minus et vero sapiente
          laudantium similique blanditiis facere. Dolorum eius iusto unde ipsa.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aut
          expedita similique eveniet facilis veniam provident nostrum
          perspiciatis aperiam, blanditiis esse sit veritatis aliquid, deserunt
          harum in, fugiat ab eum dicta quod! Dicta illo obcaecati facere
          corrupti. At, nulla cum exercitationem temporibus quaerat et.
        </Text>
      </Box>
    </Box>
  );
}

export default About
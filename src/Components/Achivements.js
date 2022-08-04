import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { GrAchievement, GrCertificate } from 'react-icons/gr';
import Lottie from 'react-lottie';
import animationData from "../assets/certificate-ani.json";
import animationData1 from "../assets/achievement.json";

const Achivements = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    }
    const defaultOptions1 = {
      loop: true,
      autoplay: true,
      animationData: animationData1,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  return (
    <Box
      id="achievements"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      p={{base:"1.5rem",md:"3rem"}}
      justifyContent="space-evenly"
    >
      <Box
        width={{ base: "100%", md: "45%" }}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        bg="whiteAlpha.400"
        boxShadow="dark-lg"
        my="2.5rem"
        position="relative"
      >
        <Heading fontSize="3rem" m="1rem">
          Certifications
        </Heading>

        <Box
          zIndex="-1"
          width="45%"
          display="flex"
          position="absolute"
          top={{ base: "-4rem", md: "-5rem", lg: "-6rem" }}
          left={{ base: "-3rem", md: "-5rem", lg: "-8rem" }}
        >
          <Lottie h="100%" width="100%" options={defaultOptions} />
        </Box>
        <List spacing={3} p="2rem">
          <ListItem
            bg="whiteAlpha.200"
            boxShadow="dark-lg"
            p="1rem"
            borderRadius="xl"
          >
            <ListIcon as={GrCertificate} color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </List>
      </Box>
      <Box
        width={{ base: "100%", md: "45%" }}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        bg="whiteAlpha.400"
        boxShadow="dark-lg"
        my="2.5rem"
        position="relative"
      >
        <Heading fontSize="3rem" m="1rem">
          Achievements
        </Heading>
        <Box
          zIndex="-1"
          width="45%"
          display="flex"
          position="absolute"
          top={{ base: "-4rem", md: "-4rem", lg: "-7rem" }}
          left={{ base: "-3rem", md: "-3rem", lg: "-5rem" }}
        >
          <Lottie h="100%" width="100%" options={defaultOptions1} />
        </Box>
        <List spacing={3} p="2rem">
          <ListItem
            bg="whiteAlpha.200"
            boxShadow="dark-lg"
            p="1rem"
            borderRadius="xl"
          >
            <ListIcon as={GrAchievement} color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Achivements
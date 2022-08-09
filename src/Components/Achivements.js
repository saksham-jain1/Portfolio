import { Box, Heading, List, ListIcon, ListItem, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { GrAchievement, GrCertificate } from 'react-icons/gr';
import Lottie from 'react-lottie';
import animationData from "../assets/certificate-ani.json";
import animationData1 from "../assets/achievement.json";
import darkBg1 from "../assets/night7.jpg";

const Achivements = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
    const certificates = [
      "Java Programming: Solving Problems with Software (Duke University, Coursera)",
      "Databases for Developers: Next Level (Oracle)",
      "HTML, CSS, and JavaScript for Web Developers (Johns Hopkins University, Coursera)",
      "Programming for Everybody (University of Michigan, Coursera)",
      "CCNAv7: Introduction to Networks (Cisco Networking Academy)",
      "Introduction to Packet Tracer (Cisco Networking Academy)",
      "Cybersecurity Essentials (Cisco Networking Academy)",
    ];
    const achievement = [
      "Global rank of 2271 in TCS CodeVita Season 10",
      "College Rank: 33, Graduation Year Rank [All India]: 342, National Rank : 8650 in CodeKaze by Coding Ninja's",
      "Qualified Gate 2022",
      "Global Rank 88th in June Long Challenge 2021 Division 3(Rated)",
      "Got 92.6 percentile in JEE Main - 2019",
    ];
    return (
      <Box
        id="achievements"
        w="100%"
        position="relative"
        display="flex"
        flexWrap="wrap"
        p={{ base: "1.5rem", md: "3rem" }}
        justifyContent="space-evenly"
        backgroundImage={colorMode === "dark" ? darkBg1 : ""}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        bgAttachment="fixed"
      >
        <Box
          width={{ base: "100%", md: "45%" }}
          display="flex"
          flexDir="column"
          alignItems="center"
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
            {certificates.map((curr, id) => {
              return (
                <ListItem
                  bg="whiteAlpha.200"
                  boxShadow="dark-lg"
                  p="1rem"
                  borderRadius="xl"
                  key={id}
                >
                  <ListIcon as={GrCertificate} color="green.500" />
                  {curr}
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box
          width={{ base: "100%", md: "45%" }}
          display="flex"
          flexDir="column"
          alignItems="center"
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
            {achievement.map((curr, id) => {
              return (
                <ListItem
                  bg="whiteAlpha.200"
                  boxShadow="dark-lg"
                  p="1rem"
                  borderRadius="xl"
                  key={id}
                >
                  <ListIcon as={GrAchievement} color="green.500" />
                  {curr}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    );
}

export default Achivements
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Card from './Card';
import "../index.css"
import Lottie from 'react-lottie';
import animationData from "../assets/portfolio-background.json";

const Project = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  const ProjectDetail = {}
  return (
    <Box
      id="project"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      py="3rem"
    >
      <Box position="absolute" top="0">
        <Lottie options={defaultOptions} />
      </Box>
      <Heading
        zIndex="1"
        textAlign="center"
        width="100%"
        mb="1rem"
        fontSize="4rem"
      >
        Projects
      </Heading>
      <Tabs zIndex="1" width="100%" variant="soft-rounded">
        <TabList px="1rem" display="flex" justifyContent="center" my="2rem">
          <Tab
            color="black"
            bg="whiteAlpha.200"
            _selected={{
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            mr="2rem"
            border="1px solid black"
            width={{ base: "20%", md: "20%" }}
          >
            All
          </Tab>
          <Tab
            color="black"
            bg="whiteAlpha.200"
            _selected={{
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            mr="2rem"
            border="1px solid black"
            width={{ base: "35%", md: "20%" }}
          >
            Completed
          </Tab>
          <Tab
            color="black"
            bg="whiteAlpha.200"
            _selected={{
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            border="1px solid black"
            width={{ base: "45%", md: "20%" }}
          >
            On-Going
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel display="flex" overflowX="auto" whiteSpace="nowrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Project
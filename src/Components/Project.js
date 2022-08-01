import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Card from './Card';
import "../index.css"

const Project = () => {
  const ProjectDetail = {}
  return (
    <Box
      id="project"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      py="3rem"
      bg="blue.100"
    >
      <Heading textAlign="center" width="100%" mb="1rem" fontSize="4rem">
        Projects
      </Heading>
      <Tabs
        width="100%"
        px="1rem"
        variant="soft-rounded"
        colorScheme="green.600"
      >
        <TabList display="flex" justifyContent="center" my="2rem">
          <Tab
            _selected={{
              color: "white",
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            mr="2rem"
            border="1px solid black"
            width={{ base: "20%", md: "20%" }}
          >
            All
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            mr="2rem"
            border="1px solid black"
            width={{ base: "35%", md: "20%" }}
          >
            Completed
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            border="1px solid black"
            width={{ base: "45%", md: "20%" }}
          >
            On-Going
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel display="flex" overflowX="auto" flexWrap="nowrap">
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
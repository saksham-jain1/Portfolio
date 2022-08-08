import { Box, Heading, Tag, useColorMode } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/programming-computer.json";
import animationData1 from "../assets/39388-wolf-and-moon.json";

const Skills = () => {
  const { colorMode, toggleColorMode } = useColorMode();
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
               const defaultOptions1 = {
                 loop: true,
                 autoplay: true,
                 animationData: animationData1,
                 rendererSettings: {
                   preserveAspectRatio: "xMidYMid slice",
                 },
               };
  const SkillsData = [
    {
      title: "Technical Language",
      data: [
        "C",
        "C++",
        "Java",
        "Python",
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "SQL",
      ],
    },
    {
      title: "Frameworks/Libraries",
      data: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "REACT Native",
        "Chakra-Ui",
        "Material-Ui",
        "Bootstrap",
      ],
    },
    {
      title: "Tools",
      data: ["Git", "GitHub", "VsCode", "Heroku", "Postman"],
    },
    {
      title: "Databases",
      data: ["MySql", "MongoDB"],
    },
    {
      title: "Others",
      data: ["Database Management","Data Structures & Algorithms","Object Oriented Programming","Operating System","Compitetive Programming"],
    },
  ];
  return (
    <Box
      id="skills"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      py="3rem"
      bg={colorMode == "dark" ? "#29043890" : "blue.100"}
    >
      {colorMode === "dark" ? (
        <Box
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          zIndex="-1"
        >
          <Lottie options={defaultOptions1} />
        </Box>
      ) : (
        " "
      )}
      <Heading
        textAlign="center"
        width="100%"
        mb={{ base: "0", md: "1rem" }}
        fontSize="4rem"
      >
        Skills
      </Heading>
      <Box
        position={{ base: "relative", md: "relative", lg: "absolute" }}
        right={{ base: "0", md: "3rem" }}
        top={{ base: "-1rem", md: "5rem" }}
      >
        <Lottie options={defaultOptions} />
      </Box>
      {SkillsData.map((curr, ind) => {
        return (
          <Box
            key={ind}
            alignItems="center"
            flexWrap="wrap"
            display="flex"
            w="100%"
            mx="2.5rem"
            zIndex="1"
          >
            <Heading color="blue.400" mt="1.5rem" w="100%">
              {curr.title}:
            </Heading>
            <Box display="flex" pr="1rem" flexWrap="wrap" mt=".5rem">
              {curr.data.map((skill, id) => {
                return (
                  <Tag key={id} m=".4rem" p=".7rem" size="md">
                    {skill}
                  </Tag>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Skills;

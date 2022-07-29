import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Avatar, Box, Heading, Img, Text, Tooltip } from '@chakra-ui/react';
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import ReactTyped from 'react-typed';
import avtar from "../assets/avtar.png";

const IntroCard = () => {
  const textLines = [
    `I am a <b>Software Developer</b>`,
    `I am a <b>Web Developer</b>`,
    `I am a <b>Compitetive Coder</b>`,
    `I am a <b>Problem Solver</b>`,
  ];
  return (
    <Box
      width={{ base: "100%", md: "50%" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="5rem"
      mb="2rem"
      scrollBehavior="smooth"
    >
      <Box
        position="relative"
        className="glassyBox"
        w={{base:"95%",md:"75%"}}
        textAlign="center"
        color="whiteAlpha.700"
      >
        <Heading my=".7rem" fontSize="3.9rem">
          Saksham Jain
        </Heading>
        <Text fontSize="2rem">
          <ReactTyped strings={textLines} typeSpeed={90} backSpeed={40} loop />
        </Text>
        <Img src={avtar} height="9rem" width="9rem" shadow="dark-lg" my="4" mx="auto" borderRadius="5rem" />
        <Box
          w="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          <Text>
            <Tooltip label="Call Me" placement="top">
              <a href="tel:9889988940">
                <PhoneIcon />
                +91 9889988940
              </a>
            </Tooltip>
          </Text>
          <Text>
            <Tooltip label="Mail Me" placement="top">
              <a href="mailto:sj20011002@gmail.com">
                <EmailIcon /> sj20011002@gmail.com
              </a>
            </Tooltip>
          </Text>
        </Box>
        <Box display="flex" w="100%" my="3" justifyContent="space-evenly">
          <Tooltip label="saksham-jain1">
            <a href="https://github.com/saksham-jain1">
              <AiFillGithub size={44} />
            </a>
          </Tooltip>
          <Tooltip label="saksham-jain-5b87a0179">
            <a href="https://www.linkedin.com/in/saksham-jain-5b87a0179/">
              <AiFillLinkedin size={44} />
            </a>
          </Tooltip>
          {/* <a href="#id">
                  <InfoIcon boxSize={8} />
                </a> */}
        </Box>
      </Box>
    </Box>
  );
}

export default IntroCard
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Avatar, Box, Text, Tooltip } from '@chakra-ui/react';
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// import ReactTyped from 'react-typed';

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
      my="5rem"
    >
      <Box
        position="relative"
        className="glassyBox"
        w="75%"
        shadow="lg"
        textAlign="center"
      >
        <Text my="4" fontSize={36}>
          Saksham Jain
        </Text>
        <Text fontSize={20}>
          {/* <ReactTyped strings={textLines} typeSpeed={90} backSpeed={40} loop /> */}
        </Text>
        <Avatar size="2xl" m="4" />
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
            <Tooltip label="Call Me" placement="top">
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
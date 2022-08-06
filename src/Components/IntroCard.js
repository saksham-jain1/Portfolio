import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Heading, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import ReactTyped from 'react-typed';
import avtar from "../assets/avtar1.png";

const IntroCard = () => {
  const textLines = [
    `<b>Software Developer</b>`,
    `<b>Web Developer</b>`,
    `<b>Compitetive Coder</b>`,
    `<b>Problem Solver</b>`,
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        w={{ base: "95%", md: "75%" }}
        textAlign="center"
        color="whiteAlpha.700"
      >
        <Heading my=".7rem" fontSize="3.9rem">
          Saksham Jain
        </Heading>
        <Text fontSize="2rem">
          <ReactTyped strings={textLines} typeSpeed={90} backSpeed={40} loop />
        </Text>
        <Img
          src={avtar}
          height="12rem"
          width="12rem"
          shadow="dark-lg"
          my="4"
          mx="auto"
          borderRadius="6rem"
        />
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
          <Tooltip label="My Location">
            <a href="#">
              <MdLocationPin size={44} onClick={onOpen} />
            </a>
          </Tooltip>
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              {/* <ModalHeader>My Location</ModalHeader> */}
              <ModalCloseButton zIndex="1" />
              <ModalBody>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115293.28373103395!2d78.49224793512049!3d25.44110124295313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481ca!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1659546987749!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
}

export default IntroCard
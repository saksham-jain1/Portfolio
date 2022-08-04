import { Box, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneOutboundFill, BsWhatsapp } from 'react-icons/bs';
import { MdAlternateEmail, MdMessage } from 'react-icons/md';

const Footer = () => {
  return (
    <Box bg="black" w="100%" display="flex" justifyContent="center" p="1rem">
      <Box
        color="white"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        w={{ base: "100%", md: "70%" }}
      >
        <Tooltip label="Call Me">
          <a href="tel:9889988940">
            <BsFillTelephoneOutboundFill size={30} />
          </a>
        </Tooltip>
        <Tooltip label="Message Me">
          <a href="sms:+919889988940">
            <MdMessage size={30} />
          </a>
        </Tooltip>
        <Tooltip label="What'sApp Me">
          <a href="https://wa.me/+919889988940">
            <BsWhatsapp size={30} />
          </a>
        </Tooltip>
        <Tooltip label="Mail Me">
          <a href="mailto:sj20011002@gmail.com">
            <MdAlternateEmail size={30} />
          </a>
        </Tooltip>
        <Tooltip label="saksham-jain1">
          <a href="https://github.com/saksham-jain1">
            <AiFillGithub size={30} />
          </a>
        </Tooltip>
        <Tooltip label="saksham-jain-5b87a0179">
          <a href="https://www.linkedin.com/in/saksham-jain-5b87a0179/">
            <AiFillLinkedin size={30} />
          </a>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Footer
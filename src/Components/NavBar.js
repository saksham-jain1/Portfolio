import React from "react";
import {
  Avatar,
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import "../index.css";
import logo from "../assets/logo.png"

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w="100%"
      bg="whiteAlpha.600"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pl={5}
      fontFamily="cursive"
      position="fixed"
      zIndex={9}
    >
      <Box fontSize="1.3rem" flex={2} mx="2" display="flex" alignItems="center">
        <Avatar size="md" mr="3" src={logo} /> <Text> Saksham Jain </Text>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        flex={3}
        justifyContent="space-around"
      >
        <a href="#id" className="navA">
          Home
        </a>
        <a href="#id" className="navA">
          About
        </a>
        <a href="#id" className="navA">
          Education
        </a>
        <a href="#id" className="navA">
          Project
        </a>
        <a href="#id" className="navA">
          Contact
        </a>
      </Box>
      <Tooltip label="Toggle to Dark Mode">
        <Button size="md" m={3}>
          <MoonIcon />
        </Button>
      </Tooltip>
      <Button display={{ base: "flex", md: "none" }} onClick={() => onOpen()}>
        <HamburgerIcon />
      </Button>
        <Drawer onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody m={5}>
              <a href="#id" className="navB">
                Home
              </a>
              <a href="#id" className="navB">
                About
              </a>
              <a href="#id" className="navB">
                Education
              </a>
              <a href="#id" className="navB">
                Project
              </a>
              <a href="#id" className="navB">
                Contact
              </a>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </Box>
  );
};

export default NavBar;

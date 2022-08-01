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
        <Avatar size="md" mr="3" my="2" src={logo} />{" "}
        <Text> Saksham Jain </Text>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        flex={3}
        justifyContent="space-around"
      >
        <a href="#home" className="navA">
          Home
        </a>
        <a href="#about" className="navA">
          About
        </a>
        <a href="#academics" className="navA">
          Academics
        </a>
        <a href="#experince" className="navA">
          Experince
        </a>
        <a href="#project" className="navA">
          Project
        </a>
        <a href="#skills" className="navA">
          Skills
        </a>
        <a href="#certificate" className="navA">
          Certificate
        </a>
        <a href="#contact" className="navA">
          Contact
        </a>
      </Box>
      {/* <Tooltip label="Toggle to Dark Mode">
        <Button size="md" m={3}>
          <MoonIcon />
        </Button>
      </Tooltip> */}
      <Button
        m=".6rem"
        display={{ base: "flex", md: "none" }}
        onClick={() => onOpen()}
      >
        <HamburgerIcon />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody m={5}>
            <a
              href="#home"
              className="navB"
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)
              }
            >
              Home
            </a>
            <a
              href="#about"
              className="navB"
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)
              }
            >
              About
            </a>
            <a
              href="#academics"
              className="navB"
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)
              }
            >
              Academics
            </a>
            <a
              href="#experince"
              className="navB"
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)
              }
            >
              Experince
            </a>
            <a
              href="#project"
              className="navB"
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)
              }
            >
              Project
            </a>
            <a href="#skills" className="navB" onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)} >
              Skills
            </a>
            <a href="#certificate" className="navB" onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)} >
              Certificate
            </a>
            <a
              href="#contact"
              className="navB"
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 1000)
              }
            >
              Contact
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;

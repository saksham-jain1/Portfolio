import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import "./index.css";
import IntroCard from "./Components/IntroCard";
import Greeting from "./Components/Greeting";
import About from "./Components/About";
import Academics from "./Components/Academics";
import Experince from "./Components/Experince";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Achivements from "./Components/Achivements";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import darkBg from "./assets/night1.jpg";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box width="100vw">
        <NavBar />
        <Box
          id="home"
          backgroundImage={colorMode == "dark" ? darkBg : darkBg}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          bgAttachment="fixed"
          w="100%"
          position="relative"
          display="flex"
          flexWrap="wrap"
        >
          <IntroCard />
          <Greeting />
        </Box>
        <About />
        <Academics />
        <Experince />
        <Project />
        <Skills />
        <Achivements />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;

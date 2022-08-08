import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import bg from "./assets/bg1.jpg";
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
import Lottie from "react-lottie";
import animationData1 from "./assets/10201-background-full-screen-night.json";
import animationData from "./assets/41067-skyfall-ufo.json";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData1,
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
  return (
    <>
      <Box width="100vw">
        <NavBar />
        {colorMode === "dark" ? (
          <Box
            position="absolute"
            zIndex="-1"
            top="0"
            left="0"
            height="100%"
            width="100%"
          >
            <Lottie options={defaultOptions} />
          </Box>
        ) : (
          " "
        )}
        <Box
          id="home"
          backgroundImage={colorMode == "dark" ? "transparent" : bg}
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
        <Box position="relative">
          {colorMode === "dark" ? (
            <Box
              position="absolute"
              zIndex="-1"
              top="0"
              left="0"
              height="100%"
              width="100%"
            >
              <Lottie options={defaultOptions1} />
            </Box>
          ) : (
            " "
          )}
          <Academics />
          <Experince />
        </Box>
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

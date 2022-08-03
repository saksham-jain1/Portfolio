import React from "react";
import { Box } from "@chakra-ui/react";
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


function App() {

  return (
    <>
      <Box width="100vw" overflowY="clip">
        <NavBar />
        <Box
          id="home"
          backgroundImage={bg}
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
      </Box>
    </>
  );
}

export default App;

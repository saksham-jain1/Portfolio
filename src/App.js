import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import bg from "./assets/bg1.jpg";
import "./index.css";
import IntroCard from "./Components/IntroCard";
import Greeting from "./Components/Greeting";
import About from "./Components/About";


function App() {

  return (
    <>
      <Box width="100vw" overflowY="clip">
        <NavBar />
        <Box
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
      </Box>
    </>
  );
}

export default App;

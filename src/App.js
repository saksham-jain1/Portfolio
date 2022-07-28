import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import bg from "./assets/bgImage.png";
import "./index.css";
import IntroCard from "./Components/IntroCard";

function App() {
  return (
    <>
      <Box width="100vw">
        <NavBar />
        <Box
          backgroundImage={bg}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          bgAttachment="fixed"
          h="max-contentq"
          w="100%"
          minH="550px"
          position="relative"
          display="flex"
          flexWrap="wrap"
        >
          <IntroCard />
          <Box></Box>
        </Box>
      </Box>
    </>
  );
}

export default App;

import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import bg from "./assets/bg1.jpg";
import "./index.css";
import IntroCard from "./Components/IntroCard";
import Greeting from "./Components/Greeting";

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
          h="max-contentq"
          w="100%"
          minH="550px"
          position="relative"
          display="flex"
          flexWrap="wrap"
        >
          <IntroCard />
          <Greeting />
        </Box>
      </Box>
    </>
  );
}

export default App;

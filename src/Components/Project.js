import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import TiltCard from './TiltCard';
import "../index.css"
import Lottie from 'react-lottie';
import animationData from "../assets/portfolio-background.json";
import chatApp from "../assets/chatApp.png"
import Banking from "../assets/Banking.png"
import PharmacyProject from "../assets/PharmacyProject.png"
import portfollio from "../assets/portfollio.png"
import weatherApp from "../assets/weatherApp.png"
import todoApp from "../assets/todoApp.png"
import GyroCard from './GyroCard';

const Project = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
      const [touchable, setTouchable] = useState(false);
      useEffect(() => {
        setTouchable(
          "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        );
      }, []);
  const ProjectDetail = [
    {
      name: "Chatting WebApp",
      detail:
        "This is simple Chatting WebApp where users Login/SignUp and then can chat in realtime, can add new friends, can add profile pic, create & edit group. This is created using MERN Stack, Charkra-Ui and Socket.io. ",
      link1: "https://github.com/saksham-jain1/Mern-Chat-App",
      link2: "https://chatting-app-0.herokuapp.com",
      status: "completed",
      img: chatApp,
    },
    {
      name: "My Portfollio",
      detail:
        "My Portfollio website this a fully responsive website where a visitor can see my work and can contact me. This is created using Reactjs & Chakra-Ui and some other js libraries for making it look good",
      link1: "https://github.com/saksham-jain1/Portfollio",
      link2: "https://my-portfollio.herokuapp.com/",
      status: "completed",
      img: portfollio,
    },
    {
      name: "Pharmacy Website",
      detail:
        "A simple Ecommerce Website for Medicines which has 3 types of user: buyer, seller, admin with different permissions and usage. Here a user can buy medicine consult a Dr. and much more. This is created using HTML/CSS, Bootstap, JS, PHP, MySql, SMTP server",
      link1: "https://github.com/saksham-jain1/pharmacy_management.github.io",
      link2: "",
      status: "completed",
      img: PharmacyProject,
    },
    {
      name: "Banking Website",
      detail:
        "A Basic Banking Website created during sparks foundation internship. A user can create account in this and can do money transfer. This created using HTML/CSS, JS, BootStrap, PHP, MySql.",
      link1: "https://github.com/saksham-jain1/Banking-Website.github.io",
      link2: "",
      status: "completed",
      img: Banking,
    },
    {
      name: "Todo App",
      detail:
        "A clone of Trello Web app where a user can manage day to day tasks, can make multiple lists of Cards, edit tasks, drag from one list to another. And all the data will be stored locally. This is created with Reactjs, Chakra-Ui, React DND",
      link1: "https://github.com/saksham-jain1/todo-list",
      link2: "https://todo-list-011.herokuapp.com/",
      status: "completed",
      img: todoApp,
    },
    {
      name: "Weather App",
      detail:
        "A simple Weather WebApp which shows hourly and weakly weather data forecast using OpenWeather API. This is created using Reactjs, Chakra-Ui, OpenWeather API.",
      link1: "https://github.com/saksham-jain1/React-weather-app",
      link2: "https://weather-app-000.herokuapp.com/",
      status: "completed",
      img: weatherApp,
    },
    {
      name: "Movie Recomendation System",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
    {
      name: "Basic Photo Editor",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
    {
      name: "Discord App Clone",
      detail: "",
      link1: "#",
      link2: "",
      status: "ongoing",
      img: "",
    },
  ];
  return (
    <Box
      id="project"
      w="100%"
      position="relative"
      display="flex"
      flexWrap="wrap"
      py="3rem"
    >
      <Box position="absolute" top="0" height="100%" width="100%">
        <Lottie options={defaultOptions} />
      </Box>
      <Heading
        zIndex="1"
        textAlign="center"
        width="100%"
        mb="1rem"
        fontSize="4rem"
      >
        Projects
      </Heading>
      <Tabs zIndex="1" width="100%" variant="soft-rounded">
        <TabList px="1rem" display="flex" justifyContent="center" my="2rem">
          <Tab
            color="black"
            bg="whiteAlpha.200"
            _selected={{
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            mr="2rem"
            border="1px solid black"
            width={{ base: "20%", md: "20%" }}
          >
            All
          </Tab>
          <Tab
            color="black"
            bg="whiteAlpha.200"
            _selected={{
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            mr="2rem"
            border="1px solid black"
            width={{ base: "35%", md: "20%" }}
          >
            Completed
          </Tab>
          <Tab
            color="black"
            bg="whiteAlpha.200"
            _selected={{
              bg: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            border="1px solid black"
            width={{ base: "45%", md: "20%" }}
          >
            On-Going
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel display="flex" overflowX="auto">
            {touchable
              ? ProjectDetail.map((curr, id) => {
                  return <GyroCard key={id} data={curr} />;
                })
              : ProjectDetail.map((curr, id) => {
                  return <TiltCard key={id} data={curr} />;
                })}
          </TabPanel>
          <TabPanel display="flex" overflowX="auto">
            {touchable
              ? ProjectDetail.map((curr, id) => {
                  if (curr.status === "completed")
                    return <GyroCard key={id} data={curr} />;
                })
              : ProjectDetail.map((curr, id) => {
                  if (curr.status === "completed")
                    return <TiltCard key={id} data={curr} />;
                })}
          </TabPanel>
          <TabPanel display="flex" overflowX="auto">
            {touchable
              ? ProjectDetail.map((curr, id) => {
                  if (curr.status === "ongoing")
                    return <GyroCard key={id} data={curr} />;
                })
              : ProjectDetail.map((curr, id) => {
                  if (curr.status === "ongoing")
                    return <TiltCard key={id} data={curr} />;
                })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Project
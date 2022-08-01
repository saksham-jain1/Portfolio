import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import Lottie from 'react-lottie';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import animationData from "../assets/developer3.json";
import { MdWork } from "react-icons/md"

const Experince = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const experince = [
    {
      id: "1",
      degree: "Web Developer And Design Intern",
      place: "The Sparks Foundation",
      detail: "CGPA: 8.9 (till Aug 2022)",
      date: "July 2021 - Aug 2021",
      icon: true,
    },
  ];
  return (
    <Box
      id="experince"
      w="100%"
      position="relative"
      display="flex"
      flexDir="column"
      flexWrap="wrap"
      p="3rem"
    >
      <Heading
        mb={{ base: "0", md: "0", lg: "5rem" }}
        textAlign="center"
        fontSize="4rem"
      >
        Experince
      </Heading>
      <Box
        position={{ base: "relative", md: "relative", lg: "absolute" }}
        top="-1rem"
        right="3rem"
      >
        <Lottie height="90%" width="90%" options={defaultOptions} />
      </Box>
      <VerticalTimeline lineColor="linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)">
        {experince.map((curr) => (
          <VerticalTimelineElement
            key={curr.id}
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#A0AEC0",
              color: "#fff",
              boxShadow: "0 0px 30px #000",
            }}
            date={curr.date}
            contentArrowStyle={{ borderRight: ".6rem solid #A0AEC0" }}
            iconStyle={{
              background: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
            }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">{curr.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">{curr.place}</h4>
            <p id="description">{curr.detail}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
}

export default Experince
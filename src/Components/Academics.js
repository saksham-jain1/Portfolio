import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrCertificate } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { Box, Heading } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import animationData from "../assets/book-loading.json";

const Academics = () => {
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const academics = [
  {
    id: "1",
    degree: "Bachelor of Technology",
    place: "Medi-Caps University, Indore(M.P)",
    detail: "Computer Science Engineering",
    date: "2019 - present",
    icon: true,
  },
  {
    id: "2",
    degree: "Bachelor of Technology",
    place: "Medi-Caps University, Indore(M.P)",
    detail: "Computer Science Engineering",
    date: "2018 - 2019",
    icon: true,
  },
  {
    id: "3",
    degree: "Bachelor of Technology",
    place: "Medi-Caps University, Indore(M.P)",
    detail: "Computer Science Engineering",
    date: "2016 - 2017",
    icon: true,
  },
  {
    id: "4",
    degree: "Bachelor of Technology",
    place: "Medi-Caps University, Indore(M.P)",
    detail: "Computer Science Engineering",
    date: "2014 - 2016",
    icon: true,
  },
];
  return (
    <Box
      id="academics"
      w="100%"
      position="relative"
      display="flex"
      flexDir="column"
      flexWrap="wrap"
      p="3rem"
      bg="gray.300"
    >
      <Heading mb="5rem" textAlign="center" fontSize="4rem">
        Academics
      </Heading>
      <Box position="absolute" top="-3rem" right="3rem">
        <Lottie options={defaultOptions} />
      </Box>
        <VerticalTimeline
          lineColor="linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)"
        >
      {academics.map((curr) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={curr.date}
            iconStyle={{
              background: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
              color: "#fff",
            }}
            icon={<FaGraduationCap />}
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

export default Academics
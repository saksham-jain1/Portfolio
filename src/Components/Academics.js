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
    degree: "Bachelor of Technology (Computer Science Engineering)",
    place: "Medi-Caps University, Indore(M.P)",
    detail: "CGPA: 8.9 (till Aug 2022)",
    date: "2019 - present",
    icon: true,
  },
  {
    id: "2",
    degree: "CCNAv7: Introduction to Networks (Educational Traning)",
    place: "Cisco Networking Academy",
    detail: "Percentage: 98.38%",
    date: "July 2022 - Aug 2022",

    icon: false,
  },
  {
    id: "3",
    degree: "Higher Secondary / XIIth (PCM)",
    place: "Jai Academy School (CBSE), Jhansi(U.P)",
    detail: "Percentage: 72.6%",
    date: "2018 - 2019",

    icon: true,
  },
  {
    id: "4",
    degree: "Secondary / Xth",
    place: "Jai Academy School (CBSE), Jhansi(U.P)",
    detail: "CGPA: 8.4",
    date: "2016 - 2017",
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
      <Heading
        mb={{ base: "0", md: "0", lg: "5rem" }}
        textAlign="center"
        fontSize="4rem"
      >
        Academics
      </Heading>
      <Box
        position={{ base: "relative", md: "relative", lg: "absolute" }}
        top="-3rem"
        right="3rem"
      >
        <Lottie height="90%" width="90%" options={defaultOptions} />
      </Box>
      <VerticalTimeline lineColor="linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)">
        {academics.map((curr) => (
          <VerticalTimelineElement
          key={curr.id}
            className="vertical-timeline-element--education"
            contentStyle={{ boxShadow: "0 0px 30px #000" }}
            contentArrowStyle={{ borderRight: ".6rem solid #fff" }}
            date={curr.date}
            iconStyle={{
              background: "linear-gradient(360deg, #e93d9b 0%, #486ed7 99%)",
              color: "#000",
            }}
            icon={curr.icon ? <FaGraduationCap /> : <GrCertificate />}
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
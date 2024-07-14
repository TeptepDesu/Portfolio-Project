import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import agapeleoImage from "../image/agapeleo-image.png";
import igsmImage from "../image/igsm-image.png";

const projects = [
  {
    title: "Agapeleo Business & Accounting Services Co.",
    description:
      "Provides services such as accounting, bookkeeping, tax filing of BIR related forms in monthly, quarterly, annually basis.",
    projectUrl: "https://www.agapeleo-accounting.com",
  },
  {
    title: "INTERNATIONAL GRADUATE SCHOOL OF MINISTRIES",
    description:
      "EQUIPPING CHRISTIAN LEADERS For the Kingdom Ministry of the Lord in World Mission",
    projectUrl: "https://www.igsm-ph.org/",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#c6b5bf"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={
              project.projectUrl === "https://www.agapeleo-accounting.com"
                ? agapeleoImage
                : project.projectUrl === "https://www.igsm-ph.org/"
                ? igsmImage
                : "" // Handle other cases or provide a default image
            }
            projectUrl={project.projectUrl} // Pass projectUrl to Card component
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

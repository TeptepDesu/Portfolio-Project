import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../assets/profile-pic.JPG";

const greeting = "Hello, I am Joseph!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React and WordPress";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#717b8e"
  >
    <VStack spacing={4}>
      <Avatar src={profilePic} size="xl" />   
      <Heading as="h1" size="2xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

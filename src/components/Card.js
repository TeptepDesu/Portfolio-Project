import React from "react";
import { VStack, Image, Heading, Text, Link, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const openWebsite = (url) => {
  window.open(url, "_blank");
};

const Card = ({ title, description, imageSrc, projectUrl }) => {
  const handleImageClick = () => {
    console.log("Clicked on image:", projectUrl);
    openWebsite(projectUrl);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    console.log("Clicked on link:", projectUrl);
    openWebsite(projectUrl);
  };

  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      align="start"
      p={4}
      spacing={2}
      maxW="600px"
      cursor="pointer"
      onClick={handleImageClick}
    >
      <Image src={imageSrc} alt={title} boxSize="100%" objectFit="cover" />
      <VStack align="start" spacing={2} flex="1" width="100%">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack justify="flex-end" width="100%" spacing={2}>
        <Text fontWeight="bold">View Project:</Text>
        <Link href={projectUrl} isExternal onClick={handleLinkClick}>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="1x"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Card;

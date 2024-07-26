import React from "react";
import { VStack, Image, Heading, Text, Link, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Card.css"; // Ensure this path is correct

const openWebsite = (url) => {
  window.open(url, "_blank");
};

const Card = ({ title, description, imageSrc, projectUrl }) => {
  const handleImageClick = () => {
    openWebsite(projectUrl);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    openWebsite(projectUrl);
  };

  return (
    <VStack
      className="card-container"
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
      <Image
        className="card-image"
        src={imageSrc}
        alt={title}
      />
      <VStack align="start" spacing={2} flex="1" width="100%">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack justify="flex-end" width="100%" spacing={2}>
        <Text fontWeight="bold">View Project:</Text>
        <Link href={projectUrl} isExternal onClick={handleLinkClick} className="card-link">
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

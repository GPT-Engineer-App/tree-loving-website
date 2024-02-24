import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, HStack, IconButton, useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import { FaTree, FaSun, FaMoon, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const treeFacts = ["Trees are the longest living organisms on Earth.", "Trees absorb carbon dioxide and potentially harmful gasses, such as sulfur dioxide, carbon monoxide, from the air and release oxygen.", "One large tree can supply a day’s supply of oxygen for four people.", "Trees help to prevent soil erosion and flooding."];

  const socialIcons = [FaInstagram, FaTwitter, FaFacebook];

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="2xl">
            All About Trees
          </Heading>
          <IconButton icon={<SwitchIcon />} isRound={true} size="md" alignSelf="flex-end" onClick={toggleColorMode} />
        </Flex>
        <Image src="https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxmb3Jlc3R8ZW58MHx8fHwxNzA4NzM4MTI1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="xl" alt="Forest Image" />
        <Heading as="h2" size="xl">
          Fascinating Tree Facts
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {treeFacts.map((fact, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <FaTree style={{ fontSize: "24px", marginBottom: "8px" }} />
              <Text mt={2}>{fact}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Heading as="h3" size="lg">
          Follow Us on Social Media
        </Heading>
        <HStack spacing={5}>
          {socialIcons.map((SocialIcon, index) => (
            <IconButton key={index} icon={<SocialIcon />} isRound={true} size="lg" variant="outline" />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;

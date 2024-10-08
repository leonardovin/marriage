// components/GiftCard.js

import { Box, Image, Heading, Text, Flex, Center, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import PixModal from "../pix-modal";

interface IGiftCardProps {
  title: string,
  description: string,
  imageUrl: string,
  value: number
}

const GiftCard: React.FC<IGiftCardProps> = ({ title, description, imageUrl, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Flex
      direction="column"
      justify="space-between"
      p={1}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      shadow="md"
      height="100%"
      gap={'15px'}
    >
      <Center>
        <Image src={imageUrl} alt={title} maxHeight="100%" mb={2} onClick={openModal} cursor="pointer" />
      </Center>
      <Box textAlign="center">
        <Heading size="m" mb={1} mt={1} fontSize="l" lineHeight="shorter">
          {title}
        </Heading>
        <Text fontSize="s" mt={1} fontFamily="Roboto, sans-serif" color="gray.600">
          {`R$ ${value}`}
        </Text>
      </Box>
      <PixModal isOpen={isOpen} onClose={closeModal} imageUrl={imageUrl} title={title} value={value} />
      <Center >
        <Button colorScheme="green" onClick={openModal} mb={2}>
          <Text fontSize={'m'}>Presentear</Text>
        </Button>
      </Center>
    </Flex>
  );
};

export default GiftCard;

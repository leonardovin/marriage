import { Box, Heading, Center, Image } from "@chakra-ui/react";
import GiftList from "../components/sections/gift-list";
import Countdown from "../components/sections/countdown";

const HomePage = () => {
  return (
    <>
      <Box bg="transparent" textAlign="center" py={8} pb={2}>
        <Center mb={4}>
          <Box
            maxW={{ base: "80%", md: "50%", lg: "40%" }} // Responsive width for the image container
            maxH="70vh" // Maximum height for the image container
            borderRadius="full"
            overflow="hidden" // Ensures the image does not overflow its container
            boxShadow="lg"
          >
            <Image
              src="images/edu-e-jessica.jpeg"
              alt="Eduardo e Jéssica"
              maxH="100%" // Ensures the image fits within its container height-wise
              objectFit="cover"
              transform="scaleX(-1)" // Mirrors the image horizontally
            />
          </Box>
        </Center>
        <Heading size="2xl" textAlign="center" color="brand" fontFamily="Great Vibes" mt={6}>
          Eduardo e Jéssica
        </Heading>
      </Box>
      <Box pt={2}> {/* Responsive padding */}
        <Countdown />
      </Box>
      <Box py={8}>
        <GiftList />
      </Box>
    </>
  );
};

export default HomePage
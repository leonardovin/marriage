import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import GiftCard from "../../gift-card";
import { gifts } from "./constants";



const GiftList = () => {
  return (
    <Box pt={8} maxW="800px" mx="auto">
      <Heading mb={8} textAlign="center" color="brand.black">
        Lista de presentes
      </Heading>
      <SimpleGrid p={"25px"} minChildWidth={"200px"} gap={10}>
        {gifts.map((gift) => (
          <GiftCard key={gift.id} {...gift} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GiftList;

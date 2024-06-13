import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

// Importa Countdown do react-countdown de forma dinâmica para renderização no cliente
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const CountdownComponent = () => {
  const countdownDate = new Date("2025-05-31T00:00:00Z");

  return (
    <Box textAlign="center" mt={8} bgColor={"brand.oliveGreen"} fontFamily={"Great Vibes"}>
      <Heading fontFamily={"Great Vibes"} pt={5}>
        Contagem Regressiva
      </Heading>
      <Flex justifyContent="center" alignItems="center">
        <Box p={2}>
          <Countdown
            date={countdownDate}
            renderer={({ days }) => (
              <Flex flexDirection="column" alignItems="center">
                <Text fontSize="4xl">{days}</Text>
                <Text>Dias</Text>
              </Flex>
            )}
          />
        </Box>
        <Box p={2}>
          <Countdown
            date={countdownDate}
            renderer={({ hours }) => (
              <Flex flexDirection="column" alignItems="center">
                <Text fontSize="4xl">{hours}</Text>
                <Text>Horas</Text>
              </Flex>
            )}
          />
        </Box>
        <Box p={2}>
          <Countdown
            date={countdownDate}
            renderer={({ minutes }) => (
              <Flex flexDirection="column" alignItems="center">
                <Text fontSize="4xl">{minutes}</Text>
                <Text>Minutos</Text>
              </Flex>
            )}
          />
        </Box>
        <Box p={2}>
          <Countdown
            date={countdownDate}
            renderer={({ seconds }) => (
              <Flex flexDirection="column" alignItems="center">
                <Text fontSize="4xl">{seconds}</Text>
                <Text>Segundos</Text>
              </Flex>
            )}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CountdownComponent;

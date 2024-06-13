// utils/withHeader.js
import React from 'react';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import theme from '../../theme';
/**
 * @typedef {import("@chakra-ui/react").Theme} Theme
 */

/**
 * @param {Object} props
 * @param {Theme} props.theme
 */

const withHeader = (WrappedComponent) => {
  // Define your header component
  const Header = ({ theme }) => (
    <Flex
      as="header"
      align="center"
      justify="center"
      padding="0.7rem"
      gap={"1.5rem"}
      bg={theme.colors.brand.oliveGreen}
      color={theme.colors.brand.black}
    >
      <Box ho>
        <Text>O casal</Text>
      </Box>
      <Box>
        <Text>Lista de presentes</Text>
      </Box>
      <Box>
        <Text>Local</Text>
      </Box>
    </Flex>
  );
  const withHeaderHoc = (props) => (
    <>
      <Header theme={theme} />
      <Box bgImage={"https://img.freepik.com/free-vector/vector-seamless-floral-pattern-illustration-horizontally-vertically-repeatable_8130-2711.jpg"}>
        <WrappedComponent {...props} />
      </Box>
    </>
  );
  // Return a new component that renders the Header and the WrappedComponent
  return withHeaderHoc
};

export default withHeader;

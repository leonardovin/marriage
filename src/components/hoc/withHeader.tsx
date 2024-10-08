// utils/withHeader.tsx
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Theme } from '@chakra-ui/react'; // Chakra UI's Theme type
import theme from '../../theme';


// Define the Header component with proper typing
export const Header: React.FC<{}> = () => (
  <Flex
    as="header"
    align="center"
    justify="center"
    padding="0.7rem"
    gap="1.5rem"
    bg={theme.colors.brand.oliveGreen}
    color={theme.colors.brand.black}
  >
    <Box>
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

// Higher-Order Component (HOC) with generics
const withHeader = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  // HOC that wraps the component with a header
  const withHeaderHoc: React.FC<P> = (props: P) => (
    <>
      <Header />
      <Box
        bgImage={
          "https://img.freepik.com/free-vector/vector-seamless-floral-pattern-illustration-horizontally-vertically-repeatable_8130-2711.jpg"
        }
      >
        <WrappedComponent {...props} />
      </Box>
    </>
  );

  return withHeaderHoc;
};

export default withHeader;

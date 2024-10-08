// utils/withFooter.tsx
import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const withFooter = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  const Footer: React.FC = () => {
    return (
      <Box as="footer" py={4} bg="gray.800" color="gray.200">
        <Flex justify="center" align="center" direction="column">
          <Text fontSize="sm">
            Created by{' '}
            <Link href="https://github.com/leonardovin" isExternal color="teal.500">
              Leonardo Almeida
            </Link>
          </Text>
          <Text fontSize="sm">
            <Link
              href="https://www.linkedin.com/in/leonardo-almeida-78524b170/"
              isExternal
              color="teal.500"
            >
              LinkedIn
            </Link>
          </Text>
        </Flex>
      </Box>
    );
  };

  return (props: P) => (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box flex="1">
        <WrappedComponent {...props} />
      </Box>
      <Footer />
    </Box>
  );
};

export default withFooter;

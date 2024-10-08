import { Box } from "@chakra-ui/react";
import React from "react";

const WithBackground = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  return (props: P) => (
    <Box
      bgImage={
        "https://img.freepik.com/free-vector/vector-seamless-floral-pattern-illustration-horizontally-vertically-repeatable_8130-2711.jpg"
      }
    >
      <WrappedComponent {...props} />
    </Box>
  );
};

export default WithBackground;

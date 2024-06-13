import { Box } from "@chakra-ui/react"
import React from "react"



const WithBackground = (WrappedComponent) => {
  return (props) => (
    <Box bgImage={"https://img.freepik.com/free-vector/vector-seamless-floral-pattern-illustration-horizontally-vertically-repeatable_8130-2711.jpg"}>
      <WrappedComponent {...props} />
    </Box>
  )
}

export default WithBackground;
import React, { ReactNode } from 'react'
import { Box } from "@chakra-ui/react";
import WithBackground from '../components/hoc/withBackground'; // Assuming this HOC adds background styles
import { Header } from '../components/hoc/withHeader';
import { Footer } from '../components/hoc/withFooter';

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header></Header>
      <Box as={"main"}>{children}</Box>
      <Footer></Footer>
    </Box>
  )
};

// Apply the background styles to the entire layout using the HOC
export default WithBackground(MainLayout);

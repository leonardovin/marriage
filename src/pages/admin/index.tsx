import { Box, Text } from "@chakra-ui/react";
import { Guest, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

type AdminPageProps = {
  user: User;
  guests: Guest[];
}

const AdminPage: React.FC<AdminPageProps> = ({ user, guests }) => {
  const { data: session } = useSession();
  const router = useRouter();


  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || '',
    email: user?.email || ''
  })

  const [guestList, setGuestList] = useState(guests);

  if (!session) {
    return <Box height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Text>Voce não está autorizado a ver essa página.</Text>
    </Box>
  }

}

export default AdminPage
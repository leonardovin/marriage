import { Box, Button, Checkbox, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Guest } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react"; // Import useSession from next-auth
import { useUpdateGuestPresence } from "../../hooks/api/Guests";

type AdminPageProps = {
  guests: Guest[];
}

const AdminPage: React.FC<AdminPageProps> = ({ guests }) => {
  const router = useRouter();
  const { data: session, status, update } = useSession(); // Get session data
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: ''
  });

  const [guestList, setGuestList] = useState(guests);

  // Mutation to update guest presence status
  const { mutate: mutateUpdateGuestPresence, isPending } = useUpdateGuestPresence();

  // Effect to set user information once session is loaded
  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setPersonalInfo({
        name: session.user.name || '',
        email: session.user.email || ''
      });
    }
  }, [status, session]);

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' }); // Redirect to the sign-in page after sign out
  };

  return (
    <Box padding={4} minHeight={'100vh'}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Admin Info
      </Text>
      {personalInfo.name && (
        <Text fontSize="lg" mb={4}>
          Welcome, {personalInfo.name} ({personalInfo.email})
        </Text>
      )}

      <Button onClick={handleSignOut}>
        Deslogar
      </Button>

      {guestList?.length > 0 && (
        <>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Guest List
          </Text>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Present</Th>
              </Tr>
            </Thead>
            <Tbody>
              {guestList.map((guest) => (
                <Tr key={guest.id}>
                  <Td>{guest.name}</Td>
                  <Td>{guest.email}</Td>
                  <Td>
                    <Checkbox
                      isChecked={guest.present} // assuming `present` is a boolean field in Guest
                      onChange={(e) => mutateUpdateGuestPresence({ guestId: guest.id, present: e.target.checked })}
                      isDisabled={isPending} // Disable while mutation is loading
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </>
      )}
    </Box>
  );
};

export default AdminPage;

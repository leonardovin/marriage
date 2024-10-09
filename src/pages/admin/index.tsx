import { Box, Checkbox, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Guest, User } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useUpdateGuestPresence } from "../../hooks/api/Guests";

type AdminPageProps = {
  user: User;
  guests: Guest[];
}

const AdminPage: React.FC<AdminPageProps> = ({ user, guests }) => {
  const router = useRouter();

  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || '',
    email: user?.email || ''
  })

  const [guestList, setGuestList] = useState(guests);

  // Mutation to update guest presence status
  const { mutate: mutateUpdateGuestPresence, isPending } = useUpdateGuestPresence()

  return (
    <Box padding={4}>
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
    </Box>
  );
};

export default AdminPage
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

interface UpdateGuestPresenceArgs {
  guestId: number;
  present: boolean;
}

export const useUpdateGuestPresence = () => {
  const queryClient = useQueryClient();

  // Update the generic types to match expected usage: 
  // `useMutation<ReturnType, ErrorType, VariablesType>`
  return useMutation<AxiosResponse<any>, Error, UpdateGuestPresenceArgs>(
    {
      mutationFn: async ({ guestId, present }: UpdateGuestPresenceArgs): Promise<AxiosResponse<any>> => {
        return await axios.post(`/api/guests/${guestId}/present`, { present });
      },
      onSuccess: () => {
        // Invalidate the cache for guest list data to ensure fresh data is loaded
        queryClient.invalidateQueries({queryKey: ['guestList'], exact: true});
      },
    }
  );
};
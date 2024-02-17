import { useMutation, useQuery } from '@tanstack/react-query';

import { queryClient } from '../utility/queryclient';
import { addNewNote, fetchData } from './api';

export function useDataFetch() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
    enabled: false,
    refetchOnMount: 'always', // Do not refetch when the component mounts
    retry: 0,
  });
}

export function usePostData() {
  return useMutation({
    mutationFn: addNewNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['notes'],
        // exact: true
      });
      // router.push('/dashboard/notes')
    },
  });
}

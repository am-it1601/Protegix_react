import { useQuery } from '@tanstack/react-query';

import { UserGroup, UserRole } from './api';

export function useUserFatchRole() {
  return useQuery({
    queryKey: ['userRole'],
    queryFn: UserRole,
    retry: 0,
  });
}
export function useUserFatchGroup() {
  return useQuery({
    queryKey: ['userGroup'],
    queryFn: UserGroup,
    retry: 0,
  });
}

// export function usePostData() {
//   return useMutation({
//     mutationFn: addNewNote,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ['notes'],
//         // exact: true
//       });
//       // router.push('/dashboard/notes')
//     },
//   });
// }

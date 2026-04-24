import { fetchUsers } from "./fetchUsersApi";

import { useQuery } from "@tanstack/react-query";
export const useFetchUsers = () =>{
return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUsers(),
     staleTime: 1000 * 60 * 5,  
    gcTime: 1000 * 60 * 10, 
})
}
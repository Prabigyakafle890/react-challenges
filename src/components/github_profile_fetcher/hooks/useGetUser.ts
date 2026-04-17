import { getUser} from "../api/getUsersApi";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (
  username: string
) => {
  return useQuery({
    queryKey: ["github-user", username],
    queryFn: () => getUser(username),
    enabled: !!username,
    staleTime: 1000 * 60 * 5,
  });
};
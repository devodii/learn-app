import axios from "axios";
import { useQuery } from "react-query";

export const useUsername = () => {
  return useQuery(
    "username",
    async () => {
      const {
        data: {
          user: { accountId },
        },
      } = await axios.get("/api/auth/whoami");
      return accountId;
    },
    { staleTime: 60000 }
  );
};


// helper
export const useUserDataQuery = (userId: any) => {
  return useQuery(["username", userId], async () => {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  });
};

import axios from "axios";

export const searchUser = async (username: string) => {
  const { data } = await axios.get(`/api/user/search/${username}`);
  return data;
};

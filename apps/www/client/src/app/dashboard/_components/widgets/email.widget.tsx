import { useQuery } from "react-query";
import { getUserEmail } from "../../_lib";
import { Loader } from "@/components/ui";

export const UserEmailWidget = () => {
  const { data: email, isLoading } = useQuery("email", async () => {
    return await getUserEmail();
  });

  return (
    <div className="border-b fixed border-b-[#2c2c2c] w-64 py-2 pl-8 -mt-1 ">
      {isLoading ? (
        <div className="py-1.5">
          <Loader size="xs" />
        </div>
      ) : (
        <p>{email || "No user"}</p>
      )}
    </div>
  );
};

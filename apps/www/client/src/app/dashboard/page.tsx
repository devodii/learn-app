"use client";

import { useUsername } from "./_lib";
import { UserGreetingWidget, UserQuestionWidget } from "@/dashboard/widget";
const DashboardPage = () => {
  const { data: user, isLoading, isError } = useUsername();
  const username = isLoading || isError ? "" : user;

  return (
    <div className="py-4 px-8 flex flex-col">
      <div className="min-h-screen px-12 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <UserGreetingWidget username={username} />

          <button className="bg-indigo-600 hover:bg-indigo-600/80 py-2.5 px-4 mt-3 break-words max-w-max font-semibold rounded-md border-none">
            Create study material
          </button>
        </div>

        <section className="flex flex-col mt-6">
          No stats for user. please, create one.
        </section>

        <footer className="fixed right-12 bottom-6 self-end">
          <UserQuestionWidget />
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;

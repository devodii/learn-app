"use client";
import React, { useCallback, useState } from "react";
import { GoalFormData } from "@/types/goals";
import Image from "next/image";
import { CreateGoalModal } from "./_components/create-goal";

const GoalsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateGoal = useCallback((data: GoalFormData) => {
    // Handle the creation of the goal here
    console.log("Goal created:", data);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-2 border p-8 w-full">
        <Image
          src="/goal.jpg"
          alt="Set a goal"
          height={200}
          width={200}
          priority
        />
        <p>You don&apos;t have any goal yet.</p>
        <button
          className="bg-red-500 hover:bg-red-500/80 py-2.5 px-4 mt-3 break-words max-w-max font-semibold rounded-md border-none"
          onClick={openModal}
        >
          Set a goal
        </button>
      </div>

      {isModalOpen && (
        <CreateGoalModal onClose={closeModal} onSubmit={handleCreateGoal} />
      )}
    </div>
  );
};

export default GoalsPage;

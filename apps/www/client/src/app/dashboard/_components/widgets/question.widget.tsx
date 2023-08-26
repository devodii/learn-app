"use client";
import { MdQuestionMark } from "react-icons/md";

export const UserQuestionWidget = () => {
  return (
    <div className="rounded-full p-2 w-max bg-indigo-600">
      <MdQuestionMark className="text-white text-xl lg:text-2xl cursor-pointer" />
    </div>
  );
};

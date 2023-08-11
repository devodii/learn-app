"use client";
import { motion } from "framer-motion";

import {
  AiOutlinePlus,
  AiOutlineUsergroupAdd,
  AiOutlineDashboard,
} from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";

interface Features {
  title: string;
  icon: typeof AiOutlinePlus;
  description: string;
}

const features: Features[] = [
  {
    title: "Create Projects",
    icon: <AiOutlinePlus className="text-5xl font-bold" />,
    description:
      "Start by creating projects and tasks related to your courses. Stay organized and focused on your learning goals.",
  },
  {
    title: "Collaborate Effortlessly",
    icon: <AiOutlineUsergroupAdd className="text-5xl font-bold" />,
    description:
      "Invite your classmates to join your projects. Collaborate, share ideas, and work together on assignments and projects.",
  },
  {
    title: "Provide Feedback",
    icon: <VscFeedback className="text-5xl font-bold" />,
    description:
      "Offer constructive feedback to your peers' work. Learn by giving and receiving suggestions to improve your skills.",
  },
  {
    title: "Dashboard Overview",
    icon: <AiOutlineDashboard className="text-5xl font-bold" />,
    description:
      "Track your project progress, see feedback from peers, and manage your learning activities all in one convenient dashboard.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="flex flex-col space-y-8">
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-semibold text-center"
      >
        How it works
      </motion.h1>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-6">
        {features.map(({ title, description, icon }, index) => (
          <motion.li
            key={index}
            className="flex flex-col gap-5 min-h-[50px] p-6 rounded-xl border shadow-md hover:outline hover:outline-zinc-400 hover:outline-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {icon}
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 inline-flex">{description}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white lg:w-full lg:max-w-sm lg:mx-auto text-black lg:text-lg py-3 px-6 rounded-xl mx-auto font-semibold hover:bg-gray-200 focus:outline-none mt-8 lg:mt-8 focus:ring focus:ring-gray-300"
      >
        Get Started
      </motion.button>
    </section>
  );
};


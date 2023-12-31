"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { FC } from "react";
import { useQuery } from "react-query";

export const HeroSection: FC = () => {
  // const { data } = useQuery("user", async () => {
  //   const { data } = await axios.get(`/api/user`);
  //   return data;
  // });

  return (
    <section className="flex space-x-6 min-h-screen justify-center items-center ">
      {/* {Array.isArray(data) &&
        data.map((data: any) => <p key={data}>{data.password}</p>)} */}

      <div className="container mx-auto w-full lg:w-3/5">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Find Your Study Partner
        </motion.h1>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl leading-9 lg:text-2xl mb-4 max-w-3xl"
          >
            Collaborate on Projects, Share Feedback, and Learn Together
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl leading-9 lg:text-2xl max-w-2xl"
          >
            <span className="font-semibold underline">Connect</span> with fellow
            students to enhance your learning journey.
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white lg:w-full lg:max-w-sm lg:mx-auto text-black lg:text-lg py-3 px-6 rounded-md font-semibold hover:bg-gray-200 focus:outline-none mt-4 lg:mt-8 focus:ring focus:ring-gray-300"
        >
          Sign me up
        </motion.button>
      </div>
      <div className=" border w-2/5 "></div>
    </section>
  );
};

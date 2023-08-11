"use client";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Types } from "../layout";
import { logger } from "@/lib/logger";

const Page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Types.AuthCredential>();
  const onSubmit: SubmitHandler<Types.AuthCredential> = (data, e: any) => {
    e.preventDefault();
    logger.log(data);
  };
  return (
    <div className="min-h-screen container mx-auto px-12 lg:px-24 py-6 lg:py-12 flex flex-col gap-12">
      <h2 className="block text-center font-bold text-xl sm:text-3xl lg:text-head">
        Log into LearnApp
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <form
          action=""
          className="flex flex-col gap-6 lg:gap-8 w-full max-w-xl"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="bg-zinc-900 rounded-md py-2.5 px-4 border focus:outline-2 focus:outline-default-blue focus:outline-offset-[4px] transition-all duration-100"
              {...register("email", { required: "Email address is required" })}
            />
            {errors.email && (
              <span className="text-red-500 0 mt-2" role="alert">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Password</label>
            <input
              className="bg-zinc-900 rounded-md py-2.5 px-4 border focus:outline-2 focus:outline-default-blue focus:outline-offset-[4px] transition-all duration-100"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 0 mt-2" role="alert">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            role="submit"
            className="bg-indigo-600 hover:bg-indigo-600/80 max-w-xs py-2.5 font-semibold rounded-md border-none"
          >
            Login
          </button>

          <p className="md:text-lg tracking-normal leading-6">
            Don&apos; have an accout yet?
            <Link
              href="/signup"
              className="ml-2 md:text-lg underline underline-offset-4 text-primary-blue"
            >
              Sign up
            </Link>
          </p>
        </form>

        <div className="border w-1/5 h-12"></div>
      </div>
    </div>
  );
};

export default Page;
export {};

import { GoalFormData } from "@/types/goals";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../../_components";
import { H2 } from "../../_components/typography";
import Example from "../../_components/date/date";
import { IoCloseOutline } from "react-icons/io5";

interface CreateGoalModalProps {
  onClose: () => void;
  onSubmit: (data: GoalFormData) => void;
}

export const CreateGoalModal = ({
  onClose,
  onSubmit,
}: CreateGoalModalProps) => {
  const { register, handleSubmit, formState } = useForm<GoalFormData>();
  const [category, setCategory] = useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleFormSubmit = (data: GoalFormData, e: any) => {
    // You can perform any necessary processing before submitting
    e.preventDefault();
    onSubmit(data);
    onClose();
  };

  return (
    <Modal className="fixed  inset-0 flex justify-center items-center  bg-opacity-50">
      <div className="bg-gray-600 rounded-lg p-8 lg:mt-12 animate-pop-out">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-1 items-center justify-between">
            <H2 value="Set a goal" />
            <button
              className=" rounded-full border border-white p-1 "
              onClick={onClose}
            >
              <IoCloseOutline className="text-2xl font-bold text-white " />
            </button>{" "}
          </div>
          <div className="overflow-y-auto max-h-[450px]">
            <div className="flex flex-col md:flex-row space-x-12 space-y-6">
              <section className="grid grid-cols-1 gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title">Title</label>
                  <input
                    {...register("title", { required: true })}
                    className="bg-inherit rounded-md py-2.5 px-4 border focus:outline-2 focus:outline-default-blue focus:outline-offset-[4px] transition-all duration-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="description">Description</label>
                  <textarea
                    {...register("description", { required: true })}
                    className="bg-inherit rounded-md py-2.5 px-4 border focus:outline-2 focus:outline-default-blue focus:outline-offset-[4px] transition-all duration-100"
                    cols={12}
                    rows={7}
                  />
                </div>

                <label htmlFor="category">Category</label>
                <select value={category} onChange={handleCategoryChange}>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  {/* Add more options as needed */}
                </select>
              </section>

              <section>
                <div className="flex flex-col gap-2">
                  <label htmlFor="targetDate">Target Date</label>
                  {/* <input
                  type="date"
                  {...register("targetDate", { required: true })}
                  className="bg-inherit rounded-md py-2.5 px-4 border focus:outline-2 focus:outline-default-blue focus:outline-offset-[4px] transition-all duration-100"
                /> */}
                  <Example />
                </div>
              </section>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="bg-red-500 hover:bg-red-500/80 rounded-lg p-2 font-semibold  mt-4"
              >
                Create Goal
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

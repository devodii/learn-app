export const Loader = () => {
  const className =
    "animate-loader w-3 h-3 mx-0.5 rounded-full bg-red-500 origin-center ";
  return (
    <div className="flex justify-center items-center gap-1 h-screen">
      <span className={`${className} dot-1`}></span>
      <span className={`${className} dot-2`}></span>
      <span className={`${className} dot-3`}></span>
    </div>
  );
};
export {}
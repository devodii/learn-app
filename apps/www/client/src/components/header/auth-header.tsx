import Link from "next/link";
import { FC } from "react";

export const AuthHeader: FC = () => {
  return (
    <header className="bg-zinc-900 text-white p-4 lg:px-16 border-b sticky top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl lg:text-2xl font-bold">LearnApp</span>
        </Link>
      </nav>
    </header>
  );
};


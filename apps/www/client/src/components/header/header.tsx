import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="bg-zinc-900 text-white p-4 lg:px-16 border-b sticky top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl lg:text-2xl font-bold">LearnApp</span>
        </Link>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">
              <span className="lg:text-lg">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <span className="lg:text-lg">Pricing</span>
            </Link>
          </li>

          <li>
            <Link href={'/signup'} className="bg-blue-500 text-base text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


// active-text: rgb(0, 187, 255)
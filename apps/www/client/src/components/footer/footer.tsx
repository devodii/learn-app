import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 border-t text-white py-8">
      <div className="container mx-auto flex flex-col gap-4 text-center">
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>Email: learnapp@gmail.com</p>
        </div>

        <div className="mb-4 flex gap-2 items-center flex-col">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <nav className="flex justify-center space-x-4">
            {[
              { icon: FaFacebook, href: "#" },
              { icon: FaTwitter, href: "#" },
            ].map((link: any) => (
              <Link href={link.href} key={link.icon}>
                <link.icon className="text-white text-2xl hover:text-gray-300 transition duration-300" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Copyright © 2023 Your App</h2>
        </div>
      </div>
    </footer>
  );
};

export {};

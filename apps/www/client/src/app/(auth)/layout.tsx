import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | LearnApp",
  description: "Login to access your dashboard ",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-white bg-zinc-900"> {children}</div>;
}

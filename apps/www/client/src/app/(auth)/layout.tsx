import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loigin | LearnApp",
  description: "Login to access your dashboard ",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-white bg-zinc-900"> {children}</div>;
}

export namespace Types {
  export interface AuthCredential {
    email: string;
    password: string;
  }
}

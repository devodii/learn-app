"use client";
import "./globals.css";
import "./styles/animate.css"
import { AuthHeader, Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";
import { RTKLayout } from "@/components/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return (
      <RTKLayout>
        <html lang="en">
          <body>
            <main>
              <div>{children}</div>
            </main>
          </body>
        </html>
      </RTKLayout>
    );
  }

  if (["/login", "/signup"].includes(pathname)) {
    return (
      <RTKLayout>
        <html lang="en">
          <body>
            <main>
              <AuthHeader />
              <div>{children}</div>
            </main>
          </body>
        </html>
      </RTKLayout>
    );
  }
  return (
    <RTKLayout>
      <html lang="en">
        <body>
          <main>
            <Header />
            <div>{children}</div>
            <Footer />
          </main>
        </body>
      </html>
    </RTKLayout>
  );
}

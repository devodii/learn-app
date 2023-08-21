import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const hasAuthCookies = req.cookies.has("connect.sid");

  if (!hasAuthCookies && req.nextUrl.pathname.startsWith("/dashboard")) {
    const message = encodeURIComponent("You must login first");
    const loginUrl = `http:/localhost:3000/login?message=${message}`;

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// should only run when pathname == dashboard.
export const config = {
  matchers: "/dashboard",
};

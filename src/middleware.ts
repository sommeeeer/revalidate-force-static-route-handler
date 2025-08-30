import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; //new URL(request.url).pathname;

  if (path === "/hi") {
  return Response.json({ url: request.url });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|match|static|fonts|api/auth|og).*)"],
};

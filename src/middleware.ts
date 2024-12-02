import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getClientIp } from "request-ip";

// /** @param {NextRequest} req */
export async function middleware(request: any) {
  const ip = request.headers.get("X-Forwarded-For");
  console.info(ip);

  return NextResponse.next();
}

import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return NextResponse.json(forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS);
  }

  return NextResponse.json(headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS);
}

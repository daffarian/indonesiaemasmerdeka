import { headers } from "next/headers";

export async function getIpFromClient() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    const ip = forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
    return ip
  }
  const ip = headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;

  return ip;
}

"use server";
import addIp from "./addIp";
import { getIpFromClient } from "../data/getIpFromClient";
import fetchIp from "../data/fetchIp";

export default async function countNewVisitor() {
  const clientIp = await getIpFromClient();
  const existingIp = await fetchIp();
  

}

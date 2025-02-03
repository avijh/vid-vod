'use server'

import { db } from "@/db/drizzle";
import { users } from "../schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getUser = async (clerkId: string) => {
  const data = await db.select().from(users).where(eq(users.clerkUserId, clerkId));
  return data;
}

export const addUser = async (clerkId: string, username: string, email: string) => {

  await db.insert(users).values({
    clerkUserId: clerkId,
    username: username || "", // Use empty string if username is missing
    email: email,
  });

  revalidatePath('/');
}
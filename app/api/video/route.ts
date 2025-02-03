import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db/drizzle";
import { users, videos } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    // Get the authenticated Clerk user
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { id: clerkUserId, emailAddresses, username, imageUrl } = clerkUser;
    const email = emailAddresses[0]?.emailAddress || "";

    // Parse the request body
    const body = await req.json(); // Ensure req.body is parsed

    // Check if user exists in the database
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.clerkUserId, clerkUserId))
      .execute();

    let newUser; // Declare newUser here

    if (existingUser.length === 0) {
      // New user: Insert into database
      [newUser] = await db.insert(users).values({
        clerkUserId: clerkUserId,
        username: username || "",
        email: email,
        profilePictureUrl: imageUrl || "",
      }).returning({ newUserId: users.userId });
      
      console.log('New user created with ID:', newUser.newUserId);
    }

    // Ensure userId is defined
    const currentUserId = (existingUser[0]?.userId || newUser?.newUserId) as string; // Assert type as string

    await db.insert(videos).values({
      userId: currentUserId, // Use the defined userId
      videoUrl: body.videoUrl,
    });

    // Return user details
    return new Response(JSON.stringify({ user: existingUser[0] || { clerkUserId, email, username, imageUrl } }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error handling auth:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

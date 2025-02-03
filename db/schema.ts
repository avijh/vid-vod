import { pgTable, uuid, varchar, text, integer, timestamp, boolean, json, doublePrecision } from "drizzle-orm/pg-core";
//import { relations } from "drizzle-orm";

// Users Table
export const users = pgTable("users", {
  userId: uuid("user_id").primaryKey().defaultRandom(),
  clerkUserId: varchar("clerk_user_id", { length: 255 }).unique().notNull(),
  username: varchar("username", { length: 50 }).unique().notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  profilePictureUrl: varchar("profile_picture_url", { length: 255 }),
  bio: text("bio"),
  dateOfBirth: timestamp("date_of_birth"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  isVerified: boolean("is_verified").default(false),
  followersCount: integer("followers_count").default(0),
  followingCount: integer("following_count").default(0),
});

// Videos Table
export const videos = pgTable("videos", {
  videoId: uuid("video_id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.userId).notNull(),
  videoUrl: text("video_url").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  caption: text("caption"),
  hashtags: json("hashtags"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  viewsCount: integer("views_count").default(0),
  likesCount: integer("likes_count").default(0),
  commentsCount: integer("comments_count").default(0),
  duration: doublePrecision("duration"),
  isPrivate: boolean("is_private").default(false),
});

// Likes Table
export const likes = pgTable("likes", {
  likeId: uuid("like_id").primaryKey().defaultRandom(),
  videoId: uuid("video_id").references(() => videos.videoId).notNull(),
  userId: uuid("user_id").references(() => users.userId).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
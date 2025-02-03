// if db folder was created outside the app folder
// then we need to use the dotenv package to get the database url as below:
import { config } from 'dotenv';
config({path: "@/.env.local"});

import { drizzle } from 'drizzle-orm/neon-http';

// The ! at the end of the argument to drizzle(process.env.DATABASE_URL!) is a TypeScript non-null assertion operator. 
// It tells the TypeScript compiler that you are certain that process.env.DATABASE_URL is not null or undefined at that point in the code.
export const db = drizzle(process.env.DATABASE_URL!);
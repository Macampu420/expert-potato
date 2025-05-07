import {betterAuth} from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import {db} from './db/index';
import { usersTable } from './db/schema';
import { user } from './db/auth-schema';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: user,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
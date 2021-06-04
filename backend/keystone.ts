import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";

const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionStorage = {
  maxAge: 60 * 60 * 24 * 360, // show long a user stay signed in
  secrec: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseUrl,
  },
  lists: createSchema({
    // Schema items will go here
  }),
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});

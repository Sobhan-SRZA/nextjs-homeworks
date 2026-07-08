import {
    MongoClient,
    ServerApiVersion
} from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";

const client = new MongoClient(process.env.MONGODB_URI!, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),

    emailAndPassword: {
        enabled: true
    }
})
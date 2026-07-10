import {
    MongoClient,
    ServerApiVersion
} from "mongodb";
import { initializeUserBoard } from "../init-user-board";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import connectDB from "../db";

const mongooseInstance = await connectDB();
const client = mongooseInstance.connection.getClient();
const db = client.db();

export const auth = betterAuth({
    //@ts-ignore
    database: mongodbAdapter(db, {
        client
    }),

    emailAndPassword: {
        enabled: true
    },

    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    if (user.id) {
                        await initializeUserBoard(user.id);
                    }
                }
            }
        }
    }
})

export async function getSession() {
    const result = await auth.api.getSession({
        headers: await headers()
    });

    return result;
}

export async function signOut() {
    const result = await auth.api.signOut({
        headers: await headers()
    });

    if (result.success) {
        redirect("/sign-in");
    }
}
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";

export default NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });
                if (user && user.password === credentials.password) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    adapter: PrismaAdapter(prisma),
})
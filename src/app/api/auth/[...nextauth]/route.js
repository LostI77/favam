import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Gmail", type: "email", placeholder: "Ingresa tu email" },
                password: { label: "Contraseña", type: "password", placeholder: "Ingresa tu contraseña" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const userFound = await prisma.user.findUnique({
                    where: { email: credentials.email }
                })
                if (!userFound) throw new Error('No user found');
                console.log(userFound);

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password);

                if (!matchPassword) throw new Error('Wrong password')
                return {
                    id: userFound.id,
                    username: userFound.username,
                    fullName: userFound.fullName,
                    email: userFound.email,
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    }
}
const handler = NextAuth({authOptions})
export { handler as GET, handler as POST }
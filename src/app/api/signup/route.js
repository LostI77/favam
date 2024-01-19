import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";

export async function POST(req) {
    try {
        const data = await req.json();
        const userFound = await prisma.user.findUnique({
            where: { email: data.email },
        });
        if (userFound) {
            return new NextResponse(JSON.stringify(
                    {
                        error: `Email ${data.email} is already in use.`
                    },
                    {
                        status: 409,
                    }
                )
            )
        }
        const usernameFound = await db.user.findUnique({
            where: {
              username: data.username,
            },
        });
        if (usernameFound) {
            return new NextResponse(JSON.stringify(
                    {
                        error: 'Username has to be unique.'
                    },
                    {
                        status: 409,
                    }
                )
            )
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                fullName,
                email,
                password: hashedPassword,
                dni,
                birthDate: new Date(birthDate),
            }
        });
        const { password: _, ...user } = newUser;
        console.log(user);
        return new NextResponse(JSON.stringify(
                {newUser},
                {status: 200}
            )
        );
    } catch (error) {
        return new NextResponse(JSON.stringify(
                { error: 'Server error in the registry' },
                { status: 400 }
            )
        );
    }
}
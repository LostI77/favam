import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req) {
    const { username, password, fullName, email, age, dni, birthDate } = await req.json();
    const newUser = await prisma.user.create({
        data: {
            username,
            fullName,
            email,
            age: Number(age),
            password,
            dni,
            birthDate: new Date(birthDate),
        }
    })
    return NextResponse.json(newUser);
}
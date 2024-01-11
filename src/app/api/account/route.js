import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
export async function DELETE(req) {
    const { id, username } = await req.json();
    const deleteUser = await prisma.user.delete({
        where: {
            AND: [
                { id },
                { username }
            ]
        }
    });
    if (deleteUser.ok) return new NextResponse("OK", { status: 204 })
    else return new NextResponse("Error", { status: 400 });
}
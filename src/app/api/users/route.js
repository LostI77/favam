import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
    try {
        const allUsers = await prisma.user.findMany();
        if (!allUsers || allUsers.length === 0) {
            return new NextResponse({ status: 404 });
        }
        return new NextResponse(JSON.stringify(
            { status: 'success', users: allUsers }),
            { headers: { 'Content-Type': 'application/json' }
        });
    } catch(error) {
        console.log('Error in getUsers handler: ', error.message);
        return new NextResponse(JSON.stringify(
            { status: 'error', message: 'Failed to fetch users' }),
            { status: 500, headers: { 'Content-Type': 'application/json' }
        });
    }
}
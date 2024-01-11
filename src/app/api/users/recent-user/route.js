import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
    try{
        const recentUser = await prisma.user.findFirst({
            orderBy: {
                createAt: 'desc',
            },
        })
        if (!recentUser) {
            return new NextResponse(JSON.stringify(
                { error: 'No users found' },
                { status: 404 }
            ));
          }
          return new NextResponse(JSON.stringify({recentUser}, {status: 200}))
    } catch(error) {
        console.error("Error getting user data", error);
        return new NextResponse(JSON.stringify(
            { error: 'Internal Server Error' },
            { status: 500 }
        ));
    }
}
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
            ))
          }
          return new NextResponse(JSON.stringify({recentUser}, {status: 200}))
    } catch(error) {
        console.log("Error getting user data", error);
    }
}
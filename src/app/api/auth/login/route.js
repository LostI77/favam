import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      throw new Error("Gmail and Password are required");
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error("Gmail or Password is required");
    }
    if (user.password !== password) {
      throw new Error("Invalid Password");
    }
    return new NextResponse(JSON.stringify({ success: true, message: 'Login successful' }, { status: 200 }));
  } catch (error) {
    console.error('Error during login:', error);
    return new NextResponse(JSON.stringify({ success: false, message: 'Login failed' }, { status: 401 }));
  }
}
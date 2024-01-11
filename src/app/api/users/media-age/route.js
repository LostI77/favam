import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        const allAge = users.reduce((acc, user) => acc + user.age, 0);
        const averageAge = allAge / users.length;
        return new NextResponse(JSON.stringify({ averageAge }, { status: 200}));
    } catch(error) {
        console.log('Error al calcular el promedio de edad:', error);
        return new NextResponse(JSON.stringify({ error: "Error en el calculo" }, { status: 500}));
    }
}
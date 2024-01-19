import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        if (!users || users.length === 0) {
            return new NextResponse(JSON.stringify({error: "Error getting data"}, { status: 503 }));
        }

        const currentDate = new Date();
        const ages = users.map(user => {
            const birthDate = new Date(user.birthDate);
            const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();
            return ageDiff;
        })

        const averageAge = ages.reduce((acc, age) => acc + age, 0) / users.length;

        return new NextResponse(JSON.stringify(
            { age: averageAge },
            { status: 200}
        ));
    } catch(error) {
        console.log('Error al calcular el promedio de edad:', error);
        return new NextResponse(JSON.stringify({ error: "Error en el calculo" }, { status: 500}));
    }
}
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const res = await request.json()
        const user = await prisma.user.findFirst({
            where: {
                email: res.email
            }
        });

        if (user) return Response.json({ message: "user has already registered" }, { status: 400 })
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(res.password, salt);
        const newUser = await prisma.user.create({
            data: {
                email: res.email,
                password: hashedPassword,
                name: res.name,
                phone: res.phone
            }
        });

        return Response.json({ message: 'User created successfully', user: newUser }, { status: 201 });

    } catch (error) {
        return Response.json({ message: 'Internal server error' }, { status: 500 });
    }
}
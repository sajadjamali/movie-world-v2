import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function POST(request: Request) {
    console.log('1')
    try {
        const res = await request.json()
        console.log('2')
        const user = await prisma.user.findFirst({
            where: {
                email: res.email
            }
        });
        console.log('3')
        if (user) return Response.json({ message: "user has already registered" }, { status: 400 })
        const salt = await bcrypt.genSalt(10);
        console.log('4')
        const hashedPassword = await bcrypt.hash(res.password, salt);
        console.log('5')
        const newUser = await prisma.user.create({
            data: {
                email: res.email,
                password: hashedPassword,
                name: res.name,
                phone: res.phone
            }
        });
        console.log('6')
        return Response.json({ message: 'User created successfully', user: newUser }, { status: 201 });

    } catch (error) {
        console.log('7')
        return Response.json({ message: 'Internal server error' }, { status: 500 });
    }
}
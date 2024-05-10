import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { type NextRequest } from 'next/server'
import { expiresDate } from '@/utils/auth'

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const res = await request.json()
        const user = await prisma.user.findFirst({
            where: {
                email: res.email
            },
        });

        if (!user) return Response.json({ message: "user is not registered" }, { status: 404 })
        const isValid = await bcrypt.compare(res.password, user.password);
        if (!isValid) return Response.json({ message: 'password is invalid' }, { status: 400 });

        const tokenData = {
            id: user.id,
        };

        const token = jwt.sign(tokenData, String(process.env.NEXT_PUBLIC_JWT_SECRET), {
            expiresIn: '4d'
        });

        return Response.json({ message: 'user logged successfully' }, {
            status: 200,
            headers: { 'Set-Cookie': `token=${token}; HttpOnly; Path=/; expires=${expiresDate()}` }
        });

    } catch (error) {
        return Response.json({ message: 'Internal server error' }, { status: 500 });
    }
}
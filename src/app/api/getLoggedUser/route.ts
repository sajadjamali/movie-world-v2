import { type NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('token');
        if (!token) return Response.json({ message: 'Authorization required' }, { status: 401 });
        const decodedToken: any = jwt.verify(token.value, String(process.env.NEXT_PUBLIC_JWT_SECRET));
        if (!decodedToken) return Response.json({ message: 'Authorization required' }, { status: 401 });

        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken.id
            },
            select: {
                name: true,
                email: true,
                phone: true
            },
        });

        return Response.json({ data: user }, { status: 200 });

    } catch (error) {
        return Response.json({ message: 'Internal server error', error }, { status: 500 });
    }
}
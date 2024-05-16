import { cookies } from 'next/headers'
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({ message: 'user logged out successfully' });
        cookies().delete('token')
        return response;
    } catch (error) {
        return Response.json({ message: 'Internal server error', error }, { status: 500 });
    }
}
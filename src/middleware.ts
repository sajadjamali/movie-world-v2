import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    if (request.cookies.get('token')) {
        return NextResponse.redirect(new URL('/home', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/auth/login', '/auth/register'],
};
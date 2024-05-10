import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const requestedRoute = config.matcher.find(route => request.url.includes(route));
    switch (requestedRoute) {
        case '/search':
            const searchParam = request.nextUrl.search.startsWith('?s=');
            if (!searchParam)
                return NextResponse.redirect(new URL('/home', request.url));
            break;
        case '/auth/login':
        case '/auth/register':
            if (request.cookies.get('token'))
                return NextResponse.redirect(new URL('/home', request.url));
            break;
        default:
            return NextResponse.next();
    }
}

export const config = {
    matcher: ['/auth/login', '/auth/register', '/search']
}
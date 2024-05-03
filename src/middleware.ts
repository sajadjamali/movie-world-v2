import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {

    const requestedRoute = config.matcher.find(route => request.url.includes(route));

    switch (requestedRoute) {
        case '/search':
            const isSearchParam = request.nextUrl.search.startsWith('?s=');
            if (!isSearchParam)
                return NextResponse.redirect(new URL('/home', request.url));
        case '/auth/login' || '/auth/register':
            if (request.cookies.get('token'))
                return NextResponse.redirect(new URL('/home', request.url));
        default:
            return NextResponse.redirect(new URL('/home', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/auth/login', '/auth/register', '/search']
}
// export async function GET(request: Request) {
//     try {
//         return Response.json({ message: 'user logged out successfully' }, {
//             status: 200,
//             headers: { 'Set-Cookie': 'token=; HttpOnly; domain=movie-world-v2.vercel.app; Path=/; Max-Age=0' }
//         });
//     } catch (error) {
//         return Response.json({ message: 'Internal server error', error }, { status: 500 });
//     }
// }

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({ message: 'user logged out successfully' });
        response.cookies.delete('token');
        return response;
    } catch (error) {
        return Response.json({ message: 'Internal server error', error }, { status: 500 });
    }
}

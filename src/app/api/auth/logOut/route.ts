import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        return NextResponse.json({ message: 'user logged out successfully' }, {
            status: 200,
            headers: { 'Set-Cookie': 'token=; HttpOnly; Path=/; Max-Age=0' }
        });
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
    }
}

// import { NextResponse } from "next/server";

// export async function GET() {
//     try {
//         const response = NextResponse.json({ message: 'user logged out successfully' });
//         response.cookies.delete('token');
//         return response;
//     } catch (error) {
//         return Response.json({ message: 'Internal server error', error }, { status: 500 });
//     }
// }

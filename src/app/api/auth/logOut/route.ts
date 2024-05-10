export async function GET(request: Request) {
    try {
        return Response.json({ message: 'user logged out successfully' }, {
            status: 200,
            headers: { 'Set-Cookie': `token=; HttpOnly; Path=/; Max-Age=0` }
        });

    } catch (error) {
        return Response.json({ message: 'Internal server error', error }, { status: 500 });
    }
}
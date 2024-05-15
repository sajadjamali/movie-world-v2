// import { serialize } from 'cookie';

export async function GET(request: Request) {
    try {
        return Response.json({ message: 'user logged out successfully' }, {
            status: 200,
            headers: { 'Set-Cookie': `token=; Path=/; Max-Age=0` }
        });

    } catch (error) {
        return Response.json({ message: 'Internal server error', error }, { status: 500 });
    }
}


// export async function GET(request: Request) {
//     try {
//         return Response.json({ message: 'user logged out successfully' }, {
//             status: 200,
//             headers: {
//                 'Set-Cookie': serialize('mytoken1', 'mytoken1Value', {
//                     path: '/',
//                 }),
//             }
//         });

//     } catch (error) {
//         return Response.json({ message: 'Internal server error', error }, { status: 500 });
//     }
// }
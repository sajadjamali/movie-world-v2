import '@/styles/authForm.css';
import { Metadata } from 'next';
import Form from '@/components/Form';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

const isNotFound = (param: string) => {
    return param !== 'register' && param !== 'login'
}

export async function generateMetadata({ params }: { params: { registerOrLogin: string } }): Promise<Metadata> {
    if (isNotFound(params.registerOrLogin))
        return {
            title: 'not found page',
            description: 'not found page'
        }
    else
        return {
            title: `${params.registerOrLogin} page`,
            description: `${params.registerOrLogin} page`
        }
}

const Page = ({ params }: { params: { registerOrLogin: string } }) => {

    const headersList = headers()
    const referer = headersList.get('referer')
    let previousPage: string = '/home';
    if (referer) {
        const refererURL = new URL(referer);
        if (refererURL.pathname !== '/auth/register')
            previousPage = refererURL.pathname;
        else previousPage = '/home';
    }

    if (isNotFound(params.registerOrLogin)) notFound();

    return (
        <div id="authPage" className='flex justify-center items-center overflow-hidden h-screen'>
            <Form type={params.registerOrLogin} previousPage={previousPage} />
        </div>
    )
};

export default Page;
import '@/styles/authForm.css';
import { Metadata } from 'next';
import Form from '@/components/Form';
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: 'login page',
    description: 'login page'
}

const Page = () => {

    const headersList = headers()
    const referer = headersList.get('referer')
    let previousPage: string = '/home';
    if (referer) {
        const refererURL = new URL(referer);
        if (refererURL.pathname !== '/auth/register')
            previousPage = refererURL.pathname;
        else previousPage = '/home';
    }

    return (
        <div id="authPage" className='flex justify-center items-center overflow-hidden h-screen'>
            <Form type='login' previousPage={previousPage} />
        </div>
    )
};

export default Page;
import '@/styles/authForm.css';
import { Metadata } from 'next';
import Form from '@/components/Form';

export const metadata: Metadata = {
    title: 'register page',
    description: 'register page'
  }

const Page = () => {

  return (
    <div id="authPage" className='flex justify-center items-center overflow-hidden h-screen'>
    <Form type='register' previousPage='' />
</div>
  )
}

export default Page;

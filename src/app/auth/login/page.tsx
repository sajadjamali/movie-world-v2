'use client'
import { login } from '@/services/auth';
import { toast } from 'react-toastify';
import '../../../styles/authForm.css';
import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginInfo } from '@/types/auth';
import { useState } from 'react';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { expiresDate } from '@/utils/auth';
import { trimedData } from '@/utils/auth';

const Page = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<ILoginInfo>();
    const [errorMessage, setErrorMssage] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onSubmit: SubmitHandler<ILoginInfo> = async (data) => {
        try {
            setErrorMssage('');
            const res = await login(trimedData(data));
            document.cookie = `isLogged=true; Path=/; expires=${expiresDate()}`;
            toast.success('Login success');
            if (document.referrer)
                window.location.href = document.referrer;
            else
                window.location.href = '/home';
        } catch (error: any) {
            setErrorMssage(error.message);
            console.log("error -->", error);
        }
    }

    return (
        <div id="authPage" className='flex justify-center items-center overflow-hidden h-screen'>
            <section className="auth-box relative bg-slate-900 p-10 rounded-lg w-11/12 px-10 min-[500px]:w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
                <Link href="/home" className='bg-yellow-500 rounded-md mx-auto w-20 block text-center mb-3 hover:bg-rose-600 hover:text-white'>Home</Link>
                <h2 className="text-red-600 bg-slate-950 font-bold text-center border-2 border-yellow-300 rounded-md py-2">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="font-bold mt-12">
                    <div className="user-box">
                        <label className='text-sky-500'>password</label>
                        <div className='relative'>
                            <input {...register('password', {
                                required: 'password is required',
                                minLength: { value: 6, message: 'The password must be at least 6 digits' },
                                maxLength: { value: 15, message: 'The password must be maximum 15 digits' },
                            })} className={`text-white w-full border-b-[1px] border-gray-300 ${errors.password && 'border-b-red-700'}`} type={showPassword ? "text" : "password"} />
                            <div onClick={() => setShowPassword(!showPassword)} className='absolute bottom-2 right-1 cursor-pointer'>
                                {
                                    showPassword ? <VisibilityIcon className='text-white' /> : <VisibilityOffIcon className='text-white' />
                                }
                            </div>
                        </div>
                        {
                            errors.password && (
                                <p className='text-red-500 font-normal mt-3 text-sm'>{errors.password?.message}</p>
                            )
                        }
                    </div>
                    <div className="user-box">
                        <label className='text-sky-500'>email</label>
                        <input {...register('email', {
                            required: 'email is required',
                            pattern: {
                                value: /^\s*[a-zA-Z0-9._%+-]+@gmail\.com\s*$/,
                                message: "Invalid email address"
                            }
                        })} className={`text-white w-full border-b-[1px] border-gray-300 ${errors.email && 'border-b-red-700'}`} />
                        {
                            errors.email && (
                                <p className='text-red-500 font-normal mt-3 text-sm'>{errors.email?.message}</p>
                            )
                        }
                    </div>
                    <Link href="/auth/register" className='text-red-400 font-normal hover:text-sky-400'>Have you not registered?</Link>
                    <button type="submit" className="flex w-full justify-center">
                        <a>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Login
                        </a>
                    </button>
                    {
                        errorMessage && (
                            <p className='text-red-500 mt-7 text-center'>{errorMessage}</p>
                        )
                    }
                </form>
            </section>
        </div>
    );
};

export default Page;
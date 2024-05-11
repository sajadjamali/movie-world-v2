'use client'
import Link from 'next/link';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { IRegisterInfo } from '@/types/auth';
import { trimedData, expiresDate } from '@/utils/auth';
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { register as registerUser, login } from '@/services/auth';

const Form: React.FC<{ type: string, previousPage: string }> = ({ type, previousPage }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMssage] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, formState: { errors }, handleSubmit } = useForm<IRegisterInfo>();

    const onSubmit: SubmitHandler<IRegisterInfo> = async (data) => {
        try {
            setErrorMssage('');
            setIsLoading(true);
            if (type === 'register') {
                await registerUser(trimedData(data));
                window.location.href = '/auth/login';
            }
            else {
                await login(trimedData(data))
                window.location.href = previousPage;
                document.cookie = `isLogged=true; Path=/; expires=${expiresDate()}`;
            }
            toast.success(`${type} success`);
        } catch (error: any) {
            setIsLoading(false);
            setErrorMssage(error.message)
            console.log("error -->", error);
        }
    }

    return (
        <section className="auth-box bg-slate-900 p-10 rounded-lg w-11/12 px-10 min-[500px]:w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
            <Link href="/home" className='bg-yellow-500 rounded-md mx-auto w-20 block text-center mb-3 hover:bg-rose-600 hover:text-white'>Home</Link>
            <h2 className="text-red-600 bg-slate-950 font-bold text-center border-2 border-yellow-300 rounded-md py-2">{type}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                {
                    type === 'register' &&
                    <>
                        < div className="user-box">
                            <label className='text-sky-500'>name</label>
                            <input {...register('name', {
                                required: 'name is required'
                            })} className={`text-white w-full border-b-[1px] border-gray-300 ${errors.name && 'border-b-red-700'}`} />
                            {
                                errors.name && errors.name.type === 'required' && (
                                    <p className='text-red-500 font-normal mt-3 text-sm'>{errors.name?.message}</p>
                                )
                            }
                        </div>
                        <div className="user-box">
                            <label className='text-sky-500'>phone number</label>
                            <input {...register('phone', {
                                required: 'phone is required',
                                pattern: {
                                    value: /^\s*09\d{9}\s*$/,
                                    message: "Please enter a valid phone number",
                                }
                            })} className={`text-white w-full border-b-[1px] border-gray-300 ${errors.phone && 'border-b-red-700'}`} />
                            {
                                errors.phone && (
                                    <p className='text-red-500 font-normal mt-3 text-sm'>{errors.phone?.message}</p>
                                )
                            }
                        </div>
                    </>
                }
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
                {
                    type === 'register' ?
                        <Link href="/auth/login" className='text-rose-600 font-normal hover:ring-rose-700 hover:text-yellow-400 ring-2 py-1 px-3 rounded-md ring-sky-300'>Sign In</Link>
                        :
                        <Link href="/auth/register" className='text-red-400 font-normal hover:text-sky-400'>Have you not registered?</Link>
                }
                <button disabled={isLoading} type="submit" className="flex w-full justify-center">
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {type === 'register' ? 'Register' : "Login"}
                    </a>
                </button>
                {
                    isLoading && (
                        <div className='flex justify-center items-center space-x-1 mt-6'>
                            <HourglassTopIcon fontSize='large' className='text-rose-700 animate-spin' />
                            <p className='text-lg text-yellow-500 text-center'>please wait...</p>
                        </div>
                    )
                }
                {
                    errorMessage && (
                        <p className='text-red-500 font-normal mt-7 text-center'>{errorMessage}</p>
                    )
                }
            </form>
        </section>
    );
};

export default Form;
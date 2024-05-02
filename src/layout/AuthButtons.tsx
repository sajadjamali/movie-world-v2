import React from 'react';
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

const AuthButtons: React.FC = () => {
    return (
        <div className="flex space-x-2">
            <Link href="/auth/register" title='login/register' className='bg-rose-700 p-1 rounded-full ms-2 hover:scale-105 min-[500px]:hidden'>
                <LoginIcon fontSize='medium' className='text-white' />
            </Link>
            <div className="btn-group border-2 border-sky-500 text-white rounded-md hidden min-[500px]:flex">
                <Link href="/auth/register" className='space-x-1 py-1 border-r-2 border-sky-500 flex items-center px-1 rounded-l-md hover:text-yellow-500 hover:scale-105'>
                    <p>Sign Up</p>
                    <PersonIcon />
                </Link>
                <Link href="/auth/login" className='space-x-1 py-1 flex items-center px-1 rounded-r-md hover:text-yellow-500 hover:scale-105'>
                    <p>Login</p>
                    <LoginIcon />
                </Link>
            </div>
        </div>
    );
};

export default AuthButtons;
import React from 'react';
import Image from 'next/image';
import { ILoggedUser } from '@/types/auth';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';

const UserInfo: React.FC<{ user: ILoggedUser, logOut: () => void }> = ({ user, logOut }) => {

    return (
        <div className='bg-gray-900 rounded-md ring-1 ring-yellow-400 text-base p-2 space-y-4 text-white'>
            <div className='flex items-center space-x-3'>
                <Image className='rounded-full' src="/assets/imgs/profile.png" alt='profile' width={50} height={50} />
                <p className='text-rose-500 text-lg'>{user.name}</p>
            </div>
            <hr />
            <div className='flex items-center space-x-2'>
                <EmailIcon className='text-yellow-400' />
                <p>{user.email}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <PhonelinkRingIcon className='text-yellow-400' />
                <p>{user.phone}</p>
            </div>
            <hr />
            <button onClick={() => logOut()} className='text-rose-500 animate-bounce hover:text-yellow-400 rounded-md block w-28 mx-auto text-center text-lg'>
                <LogoutIcon className='me-2 text-yellow-400' />
                Log Out
            </button>
        </div>
    );
};

export default UserInfo;
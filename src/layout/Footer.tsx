import React from 'react';
import Link from "next/link";
import SocialNetworks from '@/layout/SocialNetworks';

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-800 mt-auto flex flex-col md:flex-row items-center py-7 md:justify-around text-white">
            <SocialNetworks />
            <p className='text-center px-1 mt-5 md:mt-0 lg:text-lg'>All rights of the site belong to <span className='text-red-500 text-lg font-bold italic'>Movie World</span></p>
            <div className='mt-7 md:mt-0 w-10/12 min-[400px]:w-6/12 md:w-2/12 text-center'>
                <Link href="/aboutUs" className="bg-rose-600 block w-full px-3 py-2 rounded-md font-bold hover:scale-105 hover:bg-violet-700">About us</Link>
            </div>
        </div>
    );
};

export default Footer;
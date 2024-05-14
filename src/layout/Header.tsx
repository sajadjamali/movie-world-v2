"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('./Menu'))
import Link from "next/link";
import '@/styles/header.css';
import Image from 'next/image';
import Profile from './Profile';
import { links } from '@/constant';
const SearchBox = dynamic(() => import('./SearchBox'))
import { usePathname } from 'next/navigation';
import GenreList from '@/components/GenreList';

const Header: React.FC = () => {

    const pathname = usePathname();

    return (
        <div className="bg-gray-950 w-full fixed top-0 z-50 py-2 ps-2 min-[350px]:px-5 flex items-center justify-between lg:justify-around">
            <div className='flex items-center space-x-2'>
                <Profile />
                <div className='hidden lg:block'>
                    <SearchBox closeMenu={() => { }} />
                </div>
            </div>
            <Image
                className="w-auto h-10 lg:w-36"
                src="/assets/imgs/logo.png"
                width={100}
                height={100}
                alt="not found"
            />
            <div id="hambergerMenu" className="hover:text-yellow-500 lg:hidden">
                <Menu />
            </div>
            <ul className="text-white space-x-3 xl:space-x-8 hidden lg:flex">
                {
                    links.map(link => (
                        <li className='group hover:text-rose-500' key={link.title}>
                            <Link style={{ color: pathname == link.href ? 'yellow' : '' }} href={link.href}>{link.title}</Link>
                            <div className='bg-yellow-500 w-0 group-hover:w-full h-[2px] transition-width duration-500'></div>
                        </li>
                    )).slice(0, 6)
                }
                <li className='group hover:text-rose-500 relative'>
                    <Link style={{ color: pathname == links[6].href ? 'yellow' : '' }} href={links[6].href}>{links[6].title}</Link>
                    <div className='bg-yellow-500 w-0 group-hover:w-full h-[2px] transition-width duration-500'></div>
                    <div style={{ transform: "translate(-50%, 0)" }} className='invisible w-44 bg-gray-950 opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full pt-7 transition-all z-10 rounded-md'>
                        <div className='border-rose-600 text-white border-y-2 rounded-lg'>
                            <GenreList handleClick={() => { }} />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header;
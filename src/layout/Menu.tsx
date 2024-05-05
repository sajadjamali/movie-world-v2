"use client";
import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from 'next/link';
import MyAccordion from '@/components/muiComponents/MyAccordion';
import { useState, useEffect } from 'react';
import '../styles/header.css';
import { links } from '@/constant';
import { usePathname } from 'next/navigation';
import { breakpoints } from '@/constant';
import { setIcon } from '@/utils';
import { LinkType } from '@/types';
import { useMainContext } from '@/context/MainContex';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchBox from './SearchBox';

const Menu: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { loggedUser, handleLogOut } = useMainContext();
  const pathname = usePathname();

  const handleCloseMenu = () => setIsOpen(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 950) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const list = () => (
    <Box
      sx={{
        overflowX: 'hidden',
        backgroundColor: '#10151f',
        height: '100vh',
        [breakpoints.custom]: {
          maxWidth: '80vw',
        },
        [breakpoints.customXS]: {
          maxWidth: '70vw',
        },
        [breakpoints.customSM]: {
          maxWidth: '60vw',
        },
        [breakpoints.customMD]: {
          maxWidth: '50vw',
        },
      }}
    >
      <div className='flex justify-center items-center space-x-2 mt-3'>
        <Image
          src="/assets/imgs/logo.png"
          width={150}
          height={1}
          alt="not found"
        />
        <SearchBox closeMenu={handleCloseMenu} />
        <Button onClick={() => setIsOpen(false)}><CloseIcon fontSize='large' id="closeIcon"
          className="text-white hover:text-red-500 border-2 p-1 rounded-full border-yellow-500" /></Button>
      </div>
      <ul>
        {links.map((link: LinkType, index: number) => (
          <li key={link.title} className='text-white hover:bg-slate-700'>
            {
              link.title == 'Movie Genre' ? <MyAccordion handleCloseMenu={handleCloseMenu} expanded={isOpen} role="menu" /> :
                <Link
                  style={{ color: pathname == link.href ? 'yellow' : '' }}
                  href={link.href} onClick={() => setIsOpen(false)} className='flex py-5 ps-4 pb-1 items-center space-x-2'>
                  {setIcon(index)}
                  <p className='text-lg'>{link.title}</p>
                </Link>
            }
            <Divider className='bg-rose-700' />
          </li>
        ))}
        {
          loggedUser.name &&
          <li className='text-rose-500 bg-slate-950 hover:bg-slate-900'>
            <button onClick={() => { handleLogOut(); setIsOpen(false) }} className='flex justify-center space-x-1 w-full py-3'>
              <LogoutIcon className='text-yellow-500' />
              <p className='text-lg hover:text-yellow-500'>Log Out</p>
            </button>
          </li>
        }
      </ul>
      <Image
        style={{ height: "45%" }}
        src="/assets/imgs/backGround/backGround4.PNG"
        width={500}
        height={500}
        alt='not found'
      />
    </Box >
  );

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <MenuIcon fontSize='large' className="text-white hover:scale-105 hover:text-yellow-500" />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}

export default Menu;
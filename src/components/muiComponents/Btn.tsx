'use client'
import React from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const Btn: React.FC<{ href: string, icon: any, text: string }> = ({ href, icon, text }) => {
    const router = useRouter();
    return (
        <Button
            onClick={href === '/home' ? () => router.back() : () => { }}
            target={`${text !== 'Back' ? '_blank' : ''}`}
            sx={{
                color: 'white',
                '&:hover': {
                    backgroundColor: '#ed052f'
                },
                transition: 'background-color 0.6s',
            }}
            className="sm:text-base ring-2 bg-[#0f70d1] ring-green-400"
            href={href === '/home' ? '' : href}
            endIcon={icon}>
            {text}
        </Button>
    )
}

export default Btn;
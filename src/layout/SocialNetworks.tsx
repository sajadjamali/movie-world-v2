import React from 'react';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialNetworks: React.FC = () => {
    return (
        <div className='flex justify-center items-center space-x-1 lg:space-x-4'>
            <Link href="" aria-label='telegram' className='hover:scale-110 text-[#1698f0]'><TelegramIcon fontSize='large' /></Link>
            <Link href="" aria-label='instagram' className='hover:scale-110 text-[#b01323]'><InstagramIcon fontSize='large' /></Link>
            <Link href="" aria-label='twitter' className='hover:scale-110 text-[#1698f0]'><TwitterIcon fontSize='large' /></Link>
            <Link href="" aria-label='youtube' className='hover:scale-110 text-[#b01323]'><YouTubeIcon fontSize='large' /></Link>
            <Link href="" aria-label='facebook' className='hover:scale-110 text-[#1698f0]'><FacebookIcon fontSize='large' /></Link>
        </div>
    );
}

export default SocialNetworks;
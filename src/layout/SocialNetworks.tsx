import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const SocialNetworks: React.FC = () => {
    return (
        <div className='flex justify-center items-center space-x-1 lg:space-x-4'>
            <Link href="" className='hover:scale-110'><TelegramIcon style={{ color: "#1698f0" }} fontSize='large' /></Link>
            <Link href="" className='hover:scale-110'><InstagramIcon style={{ color: "#b01323" }} fontSize='large' /></Link>
            <Link href="" className='hover:scale-110'><TwitterIcon style={{ color: "#1698f0" }} fontSize='large' /></Link>
            <Link href="" className='hover:scale-110'><YouTubeIcon style={{ color: "#b01323" }} fontSize='large' /></Link>
            <Link href="" className='hover:scale-110'><FacebookIcon style={{ color: "#1698f0" }} fontSize='large' /></Link>
        </div>
    );
}

export default SocialNetworks;
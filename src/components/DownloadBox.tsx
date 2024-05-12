'use client'
import { toast } from "react-toastify";
import React, { useState } from 'react';
import { downloadLinks } from '@/constant';
import { DownloadLinkType } from '@/types';
import { isLoggedUser } from '@/utils/auth';

const DownloadBox: React.FC<{ imdbId: string }> = ({ imdbId }) => {

    const [message, setMessage] = useState<string>('');

    const handleDownload = () => {
        toast.dismiss();
        if (isLoggedUser())
            window.open(`https://www.imdb.com/title/${imdbId}`, '_blank');
        else {
            toast.info("you must login in to download");
            setMessage('you must login in to download');
            window.location.href = '/auth/login';
        }
    }

    return (
        <div data-aos="fade-right" className='mt-10 px-1 md:px-3 space-y-3'>
            {
                message && <p className='text-rose-500 text-center'>{message}</p>
            }
            {
                downloadLinks.map((link: DownloadLinkType) => (
                    < section key={link.id} style={{ borderColor: link.theme == 'blue' ? '#2f3fed' : link.theme }} className="text-sm lg:text-base grid border-e-4 bg-zinc-950 grid-cols-2 md:grid-cols-5 lg:grid-cols-6 text-center lg:w-11/12 xl:w-10/12 mx-auto rounded-md">
                        <button onClick={handleDownload} style={{ backgroundColor: link.theme, color: link.theme == 'yellow' ? 'black' : '' }} className="downloadBorder block md:h-full rounded-md md:rounded-none row-start-4 md:row-start-auto py-2 my-4 md:my-0 w-11/12 md:w-full mx-auto col-span-2 md:col-span-1 lg:col-span-2">DownLoad</button>
                        <div className='py-4 border-0.5 border-gray-20 md:border-none'><span style={{ color: link.theme == 'blue' ? '#2f3fed' : link.theme }}>Version: </span>{link.version}</div>
                        <div className='py-4 border-0.5 border-gray-20 md:border-none'><span style={{ color: link.theme == 'blue' ? '#2f3fed' : link.theme }}>Quality: </span>{link.quality}</div>
                        <div className='py-4 border-0.5 border-gray-20 md:border-none'><span style={{ color: link.theme == 'blue' ? '#2f3fed' : link.theme }}>Size: </span>{link.size}</div>
                        <div className='py-4 border-0.5 border-gray-20 md:border-none'><span style={{ color: link.theme == 'blue' ? '#2f3fed' : link.theme }}>Encoder: </span>{link.encoder}</div>
                    </section>
                ))
            }
        </div >
    )
}

export default DownloadBox;
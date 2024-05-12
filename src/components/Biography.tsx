"use client"
import Btn from './muiComponents/Btn';
import { getBiography } from '@/utils';
import React, { useState } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Biography: React.FC<{ biography: string, imdbLink: string }> = ({ biography, imdbLink }) => {

    const [showFullBiography, setShowFullBiography] = useState(false);
    const shortbiography = biography.split(' ').slice(0, 50).join(' ');

    return (
        <section className='text-white mt-5 lg:w-6/12 xl:w-7/12'>
            <div id="biography" className='scrollbar'>
                <p className="text-rose-600 text-xl text-center">biography</p>
                <div className='lg:hidden text-white overflow-auto px-2 mt-2 text-justify leading-relaxed'>
                    {showFullBiography ? getBiography(biography) : shortbiography}
                    {!showFullBiography && '... '}
                    <button className='text-yellow-500 bg-lime-800 px-3 py-1 rounded-md'
                        onClick={() => setShowFullBiography(shortbiography => !shortbiography)}>
                        {showFullBiography ? 'Less' : 'More'}
                    </button>
                </div>
                <div className='hidden overflow-hidden mt-2 px-5 lg:block leading-7 text-justify xl:leading-8'>{getBiography(biography)}</div>
            </div>
            <nav className="text-xl mt-8 flex justify-center text-black space-x-6">
                <Btn href={`https://www.imdb.com/name/${imdbLink}`} icon={<MovieIcon />} text="IMDB" />
                <Btn href="/home" icon={<ArrowBackIcon />} text="Back" />
            </nav>
        </section >
    );
};

export default Biography;
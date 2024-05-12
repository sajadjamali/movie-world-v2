import React from 'react';
import Link from 'next/link';
import { genres } from '@/constant';
import { GenreType } from '@/types';
import { ClickHandler } from '@/types';
import { convertToPascalCase } from '@/utils';
import { usePathname } from 'next/navigation';

const GenreList: React.FC<{ handleClick: ClickHandler }> = ({ handleClick }) => {
    const pathname = usePathname();
    return (
        <ul>
            {
                genres.map((genre: GenreType, index: number) => (
                    <li key={index} className='flex py-2 space-x-2 hover:bg-gray-700'>
                        <div className='bg-yellow-500 text-yellow-500 w-[3px]'></div>
                        <Link
                            style={{ color: pathname == `/genre/${genre.name}` ? 'yellow' : '' }}
                            onClick={() => handleClick()} href={`/genre/${genre.name}`} className='text-lg w-full'>{convertToPascalCase(genre.name)}</Link>
                    </li>
                ))
            }
        </ul >
    )
}

export default GenreList;
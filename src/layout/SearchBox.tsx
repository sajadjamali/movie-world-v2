import Link from 'next/link';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import PageviewIcon from '@mui/icons-material/Pageview';

interface SearchBoxProps {
    closeMenu: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ closeMenu }) => {

    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const reset = () => {
        console.log('close')
        setOpen(false);
        closeMenu();
        setSearchValue('');
    }

    const searhHandlerWithEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (searchValue.trim() && event.key === 'Enter') {
            reset();
            router.push(`/search?s=${searchValue.trim()}`)
        }
    }

    return (
        <>
            <Button aria-label="search button" disabled={open ? true : false} onClick={(e) => { setSearchValue(''); setOpen(true) }}><PageviewIcon sx={{ fontSize: '50px' }} fontSize='large' className='text-rose-600 hover:text-blue-600' /></Button >
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={{ transform: 'translate(-50%, -50%)' }} className='w-72 min-[420px]:w-96 lg:w-5/12 xl:w-4/12 2xl:w-3/12 absolute top-1/2 left-1/2 translate-y-1/2 bg-gray-950 px-2 py-6 border-2 border-yellow-500 rounded-md'>
                    <p className='text-rose-500 text-center'>Enter the name of the desired movie or actor</p>
                    <div className="search flex flex-col items-center mt-5">
                        <div>
                            <input onKeyDown={searhHandlerWithEnter} autoComplete='on' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='cursor-pointer' placeholder="search..." />
                        </div>
                        {
                            searchValue.trim() &&
                            <Link onClick={reset} href={`/search?s=${searchValue.trim()}`} className='text-white mt-7 bg-green-600 w-32 py-1 text-center rounded-md'>Go</Link>
                        }
                    </div>
                </div>
            </Modal >
        </>
    )
};

export default SearchBox;
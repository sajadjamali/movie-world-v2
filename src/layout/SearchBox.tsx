import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import PageviewIcon from '@mui/icons-material/Pageview';
import Link from 'next/link';
import { redirect } from 'next/navigation'

const SearchBox: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const searhHandlerWithEnter = (event:any) => {
        console.log(event)
        if (searchValue.trim())
            redirect(`/search?s=${searchValue.trim()}`)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}><PageviewIcon sx={{ fontSize: '50px' }} fontSize='large' className='text-rose-600 hover:text-blue-600' /></Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={{ transform: 'translate(-50%, -50%)' }} className='w-72 min-[420px]:w-96 lg:w-5/12 xl:w-4/12 2xl:w-3/12 absolute top-1/2 left-1/2 translate-y-1/2 bg-gray-950 px-2 py-6 border-2 border-yellow-500 rounded-md'>
                    <p className='text-rose-500 text-center'>Enter the name of the desired movie or actor</p>
                    <div className="search flex flex-col items-center mt-5">
                        <div>
                            <input autoComplete='on' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={searhHandlerWithEnter} className='cursor-pointer' placeholder="search..." />
                        </div>
                        {
                            searchValue.trim() &&
                            <Link onClick={() => setOpen(false)} href={`/search?s=${searchValue.trim()}`} className='text-white mt-7 bg-green-600 w-32 py-1 text-center rounded-md'>Go</Link>
                        }
                    </div>
                </div>
            </Modal >
        </>
    )
};

export default SearchBox;
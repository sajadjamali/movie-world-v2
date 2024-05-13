'use client'
import React from 'react';
import Link from "next/link";
import { useState } from "react";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const LetsGoLink: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Link onClick={() => setIsLoading(true)} style={{ transform: "translateX(-50%)", transition: "transform" }} href="/home" id="letsGoLink"
      className="bg-red-700 mx-auto hover:bg-rose-800 text-lg font-bold w-10/12 mt-40 min-[400px]:w-7/12 sm:w-5/12 md:w-3/12 xl:w-2/12 text-center text-white py-2 absolute z-20 rounded-md top-1/3">
      <div className="animate-bounce">
        {
          isLoading ?
            <>
              <p className="inline leading-3 font-normal please-text">please wait</p>
              <HourglassTopIcon fontSize='large' className='text-yellow-500 me-2 animate-spin' />
            </>
            :
            <p>Lets Go</p>
        }
      </div>
    </Link>
  )
}

export default LetsGoLink;
"use client"
import React from 'react';
import { MovieType } from '@/types';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/slider.css';
import { useState } from "react";
import Link from 'next/link';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import MySkeleton from './Loading';
import { getFirstFifteenWords } from '@/utils';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useGetSwipperMovies } from '@/services/dataFeching';
import { baseUrl, api_key, imgBaseUrl } from '@/services/api';

const Slider: React.FC = () => {

    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
    const { data, isPending, isError } = useGetSwipperMovies(`${baseUrl}/movie/top_rated?page=1&api_key=${api_key}`);

    const handleSlideChange = (swiper: any) => {
        setActiveSlideIndex(swiper.realIndex);
    };

    if (isPending) return <MySkeleton />
    if (isError) return <p className='text-center text-3xl font-bold'>Failed to fetch data</p>;

    return (
        <div style={{ height: "470px" }} className="flex justify-center items-center bg-black pt-7 px-4 lg:px-0 lg:pt-0">
            <section className='hidden lg:block lg:w-6/12 h-full'
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${imgBaseUrl}${data?.results[activeSlideIndex].backdrop_path})`,
                    backgroundSize: "cover",
                }}
            >
                <div className='text-white mt-10 ms-10 space-y-6'>
                    <p className='text-4xl font-bold'>{data?.results[activeSlideIndex].title}</p>
                    <div className='flex items-center space-x-3'>
                        <span className="bg-yellow-500 text-2xl text-black rounded-md px-2">IMDB</span>
                        <p className='text-3xl font-bold'>
                            {Math.floor(data?.results[activeSlideIndex].vote_average) + Math.floor(data?.results[activeSlideIndex].vote_average) / 10}/10
                        </p>
                    </div>
                    <div className='text-xl'>
                        {getFirstFifteenWords(data?.results[activeSlideIndex].overview)}...
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <Link className='animate-ping-custom w-28' href={`/movieInformation/${data?.results[activeSlideIndex].id}`}>
                        <PlayCircleOutlineIcon className='w-full text-white' fontSize='large' />
                    </Link>
                </div>
            </section>
            <Swiper
                className='w-full lg:mt-10 lg:w-6/12'
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2000
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                onSlideChange={handleSlideChange}
                breakpoints={{
                    370: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {
                    data?.results.slice(0, 8).map((m: MovieType) => (
                        <SwiperSlide key={m.id}>
                            <Link href={`/movieInformation/${m.id}`}>
                                <Image src={`${imgBaseUrl}${m.poster_path}`} alt="not found" width={250} height={500} className='h-96 rounded-md w-64 mx-auto border-2 border-yellow-500' unoptimized />
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default Slider;
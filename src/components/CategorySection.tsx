"use client";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "../styles/categorySection.css";
import React from 'react';
import Movie from "./Movie";
import Link from "next/link";
import { MovieType } from "@/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar } from 'swiper/modules';
import ForwardIcon from '@mui/icons-material/Forward';

const CategorySection: React.FC<{ movies: MovieType[], sectionName: string, href: string, effect: string }> = ({ movies, sectionName, href, effect }) => {
    return (
        <div className="px-6 xl:w-11/12 mx-auto">
            <Link href={href} className="inline-flex items-center max-[300px]:text-sm text-lg text-md bg-yellow-500 rounded-md ps-1 py-1">
                <p className='max-[400px]:text-sm'>all {sectionName}</p>
                <ForwardIcon fontSize="medium" className="text-red-700" />
            </Link>
            <section className="hidden mt-6 gap-y-5 gap-x-4 place-items-center items-center min-[500px]:grid justify-center min-[500px]:grid-cols-2 min-[650px]:grid-cols-3 min-[1050px]:grid-cols-4 min-[1450px]:grid-cols-5 min-[1700px]:grid-cols-6">
                {
                    movies?.slice(0, 10).map((movie: MovieType) => (
                        <Movie effect={effect} key={movie.id} movie={movie} />
                    ))
                }
            </section>

            <section className="mt-5 min-[500px]:hidden">
                <Swiper
                    style={{ padding: 0 }}
                    spaceBetween={15}
                    slidesPerView={2}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    scrollbar={true}
                    modules={[Keyboard, Scrollbar]}
                    className="mySwiper"
                >
                    {
                        movies?.slice(0, 10).map((movie: MovieType) => (
                            <SwiperSlide key={movie.id}>
                                <Movie effect={effect} movie={movie} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </div>
    );
}

export default CategorySection;
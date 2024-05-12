'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { MovieType } from '@/types';
import Movie from './Movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar } from 'swiper/modules';

const CategorySectionSlider:React.FC<{movies: MovieType[], effect:string}> = ({movies, effect}) => {
    return (
        <section className="mt-5 min-[500px]:hidden">
            <Swiper
                style={{ padding: 0 }}
                spaceBetween={15}
                slidesPerView={2}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true
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
    )
}

export default CategorySectionSlider;
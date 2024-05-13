import React from 'react';
import Link from "next/link";
// import '../styles/test.css';
import Image from "next/image";
import { MovieType } from "@/types";
import Rating from '@mui/material/Rating';
import { imgBaseUrl } from '@/services/api';
import Tooltip from '@mui/material/Tooltip';
import StarIcon from '@mui/icons-material/Star';

const Movie: React.FC<{ movie: MovieType, effect: string }> = ({ movie, effect }) => {
    return (
        <>
            {
                movie.poster_path &&
                <div data-aos={effect}>
                    <Link href={`/movieInformation/${movie.id}`} className='transition-transform duration-300 ease-in-out hover:scale-105 rounded-sm'>
                        <Image
                            alt={movie.title}
                            width={250}
                            height={250}
                            src={`${imgBaseUrl}${movie.poster_path}`}
                            unoptimized
                        />
                        <p className="text-white text-center max-[410px]:text-sm mt-2">
                            {movie.title}
                        </p>
                        <Tooltip className="text-center" disableTouchListener title={`${movie.vote_average} / 10`}>
                            <div>
                                <Rating className="max-[300px]:text-sm" emptyIcon={<StarIcon className="text-white max-[300px]:text-sm" />} readOnly value={movie.vote_average / 2} precision={0.1} />
                            </div>
                        </Tooltip>
                    </Link>
                </div >
            }
        </>
    );
}

export default Movie;
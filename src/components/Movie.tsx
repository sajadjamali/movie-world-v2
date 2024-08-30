import React from 'react';
import Link from "next/link";
import '@/styles/ihover.css';
import Image from "next/image";
import { MovieType } from "@/types";
import { blurHash } from '@/constant';
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
                    <div className="ih-item square effect7">
                        <Link href={`/movieInformation/${movie.id}`}>
                            <Image
                                alt={movie.title}
                                width={250}
                                height={250}
                                src={`${imgBaseUrl}${movie.poster_path}`}
                                unoptimized
                                blurDataURL={blurHash}
                                placeholder="blur"
                            />
                            <div className="info">
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                            </div>
                        </Link>
                    </div>
                    <Link href={`/movieInformation/${movie.id}`}>
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
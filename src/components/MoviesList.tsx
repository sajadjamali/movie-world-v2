import React from 'react';
import Movie from './Movie';
import { MovieType } from '@/types';

const MoviesList: React.FC<{ movies: MovieType[], title: string }> = ({ movies, title }) => {
    return (
        <div className="mt-10 px-5 lg:w-11/12 xl:w-10/12 mx-auto">
            {
                movies.length > 0 &&
                <>
                    <p className="text-2xl mb-7 text-center text-white">{title}</p>
                    <div className="mt-5 md:mt-10 grid place-items-center items-start grid-cols-1 min-[300px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {
                            movies.map((movie: MovieType) => (
                                <Movie effect='flip-down' key={movie.id} movie={movie} />
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default MoviesList;
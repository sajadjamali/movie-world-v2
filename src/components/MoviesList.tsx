import React from 'react';
import { MovieType } from '@/types';
import Movie from './Movie';

const MoviesList: React.FC<{ movies: MovieType[], title: string }> = ({ movies, title }) => {
    return (
        <div className="mt-10 px-5 lg:w-11/12 xl:w-10/12 mx-auto">
            {
                movies.length > 0 &&
                <>
                    <p className="text-2xl text-center text-cyan-500">{title}</p>
                    <div className="mt-5 md:mt-10 grid place-items-center items-start grid-cols-1 min-[300px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {
                            movies.slice(0, 10).map((movie: MovieType) => (
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
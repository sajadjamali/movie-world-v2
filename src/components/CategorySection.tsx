import React from 'react';
import Movie from "./Movie";
import Link from "next/link";
import { MovieType } from "@/types";
import "../styles/categorySection.css";
import { convertToPascalCase } from "@/utils";
import { getMovies } from "@/services/dataFeching";
import ForwardIcon from '@mui/icons-material/Forward';
import dynamic from 'next/dynamic';
const CategorySectionSlider = dynamic(() => import('./CategorySectionSlider'))

const CategorySection: React.FC<{ sectionName: string, effect: string }> = async ({ sectionName, effect }) => {

    const movies = await getMovies(sectionName, 2);

    return (
        <div className="px-6 xl:w-11/12 mx-auto">
            <Link href={`/category/${sectionName}`} className="inline-flex items-center max-[300px]:text-sm text-lg text-md bg-yellow-500 rounded-md ps-1 py-1">
                <p className='max-[400px]:text-sm'>all {convertToPascalCase(sectionName)}</p>
                <ForwardIcon fontSize="medium" className="text-red-700" />
            </Link>
            <section className="hidden mt-6 gap-y-5 gap-x-4 place-items-center items-center min-[500px]:grid justify-center min-[500px]:grid-cols-2 min-[650px]:grid-cols-3 min-[1050px]:grid-cols-4 min-[1450px]:grid-cols-5 min-[1700px]:grid-cols-6">
                {
                    movies.results?.slice(0, 10).map((movie: MovieType) => (
                        <Movie effect={effect} key={movie.id} movie={movie} />
                    ))
                }
            </section>
            <CategorySectionSlider movies={movies.results} effect={effect} />
        </div>
    );
}

export default CategorySection;
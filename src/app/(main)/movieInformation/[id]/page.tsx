import { imgBaseUrl } from "@/services/api";
import Image from "next/image";
import type { Metadata } from 'next';
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";
import { GenreType } from "@/types";
import MoviesList from "@/components/MoviesList";
import { getCountries } from "@/utils";
import { getMovie, getRecomendations } from "@/services/dataFeching";
import MovieActors from "@/components/MovieActors";
import MovieInfoLinks from "@/components/MovieInfoLinks";
import DownloadBox from "@/components/DownloadBox";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const movie = await getMovie(params.id);
    return {
        title: `movie | ${movie.original_title}`,
        description: movie.overview,
        icons: {
            icon: `${imgBaseUrl}${movie.poster_path}`
        }
    }
}

const Page = async ({ params }: { params: { id: string } }) => {

    const movie = await getMovie(params.id);
    const recomendation = await getRecomendations(params.id);

    return (
        <div className="text-white mx-2 lg:mx-4 my-4">
            <div className="lg:flex lg:justify-around lg:space-x-4 lg:text-xl">
                {
                    movie.backdrop_path ?
                        <>
                            <Image id="movieImg" className="rounded-lg mb-6 hidden lg:block mt-8 mx-auto lg:mx-0 w-11/12 sm:w-10/12 lg:w-5/12 h-96 lg:h-auto" src={`${imgBaseUrl}${movie.poster_path}`} width={100} height={100} alt={movie.original_title} unoptimized />
                            <Image id="movieImg" className="rounded-lg mb-6 lg:hidden mt-8 mx-auto lg:mx-0 w-11/12 sm:w-10/12 lg:w-5/12 h-96 lg:h-auto" src={`${imgBaseUrl}${movie.backdrop_path}`} width={100} height={100} alt={movie.original_title} unoptimized />
                        </>
                        :
                        <Image id="movieImg" className="rounded-lg mb-6 mt-8 mx-auto lg:mx-0 w-11/12 sm:w-10/12 lg:w-5/12 h-96 lg:h-auto" src={`${imgBaseUrl}${movie.poster_path}`} width={100} height={100} alt={movie.original_title} unoptimized />
                }
                <section className="lg:w-7/12 md:flex md:flex-col md:justify-around">
                    <section className="min-[600px]:flex min-[600px]:justify-evenly min-[600px]:my-4 min-[600px]:items-center min-[600px]:space-x-3">
                        <section className="mt-4">
                            <p className="text-center text-2xl">
                                {movie.title} ({movie.release_date.split("-")[0]})
                            </p>
                            <p className="mt-2 text-center text-lg text-cyan-500">
                                {movie.tagline}
                            </p>
                            <p className="mt-2 text-center text-lg lg:text-md"><span className="text-rose-600">countries: </span><span className="text-sm">{getCountries(movie.production_countries)}</span></p>
                        </section>
                        <hr className="my-6 min-[600px]:hidden" />
                        <section className="md:flex md:mt-0 lg:block xl:flex md:items-center justify-center space-x-1 mt-3">
                            <section className="flex justify-center items-center mt-2 md:mt-9 xl:mt-11 text-sm space-x-2">
                                <Tooltip className="text-center min-[600px]:hidden" disableTouchListener title={`${movie.vote_average} / 10`}>
                                    <div>
                                        <Rating className="text-sm" emptyIcon={<StarIcon className="text-white text-sm" />} readOnly value={movie.vote_average / 2} precision={0.1} />
                                    </div>
                                </Tooltip>
                                <p>
                                    <span className="bg-yellow-500 text-black rounded-md px-1 me-1">IMDB</span>
                                    <span className="font-bold text-lg text-emerald-400">{Math.floor(movie?.vote_average) + Math.floor(movie?.vote_average) / 10}</span>
                                </p>
                                <p className="bg-yellow-500 rounded-md text-center text-black p-1">
                                    {movie?.runtime}min Language:
                                    {movie?.spoken_languages.length > 0
                                        ? movie?.spoken_languages[0].name
                                        : ""}
                                </p>
                            </section>
                            <section className="mt-3 md:mt-0 lg:mt-2">
                                <p className="text-xl text-center text-rose-600">genre</p>
                                <div className="flex ms-1 justify-center flex-wrap text-center xl:grid xl:grid-cols-2 mt-2 gap-2">
                                    {movie?.genres?.map((genre: GenreType) => {
                                        return (
                                            <Link href={`/genre/${genre.name}`} key={genre.id} className="border-2 border-yellow-500 rounded-md px-2 py-1 hover:bg-yellow-500 hover:text-rose-800">
                                                <p className="text-sm">
                                                    {genre?.name}
                                                </p>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </section>
                        </section>
                    </section>
                    <hr className="hidden my-6 min-[600px]:block" />
                    <section className="mt-6 px-3 md:px-5 flex flex-col justify-center items-center">
                        <p className="text-xl text-rose-600">
                            Overview
                        </p>
                        <div className="text-justify mt-2 leading-relaxed">
                            {movie?.overview}
                        </div>
                    </section>
                    {movie?.credits.cast &&
                        <MovieActors actors={movie?.credits.cast} />
                    }
                </section>
            </div>
            <MovieInfoLinks homePage={movie.homepage} imdbId={movie.imdb_id} videos={movie.videos?.results[0]?.key} />
            <DownloadBox imdbId={movie.imdb_id} />
            <MoviesList title="You Might Also Like" movies={recomendation.results} />
        </div >
    )
}

export default Page;
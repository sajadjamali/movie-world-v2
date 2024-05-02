import { baseUrl, api_key } from "../api";
import { useQuery } from "@tanstack/react-query";

const fetcherFunc = async (url: string) => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getActor(id: string) {
    const actor = await fetcherFunc(`${baseUrl}/person/${id}?api_key=${api_key}`)
    return actor;
}

export async function getMovies(categorie: string, page: number) {
    const movies = await fetcherFunc(`${baseUrl}/movie/${categorie}?page=${page}&api_key=${api_key}`)
    return movies
}

export async function getMovie(id: string) {
    const movie = await fetcherFunc(`${baseUrl}/movie/${id}?append_to_response=videos,credits&api_key=${api_key}`);
    return movie
}

export async function getRecomendations(movieId: string) {
    const recomendations = await fetcherFunc(`${baseUrl}/movie/${movieId}/recommendations?api_key=${api_key}`);
    return recomendations;
}

export function useGetSwipperMovies(fetchUrl: string) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['swipper movies'],
        queryFn: async () => await fetcherFunc(fetchUrl)
    });
    return { data, isLoading, isError }
}

export function useGetActorMovies(actorID: number, pageNumber: number) {
    const { data, isLoading, isError } = useQuery({
        queryKey: [`actorID: ${actorID} page number: ${pageNumber}`],
        queryFn: async () => await fetcherFunc(`${baseUrl}/discover/movie?with_cast=${actorID}&page=${pageNumber}&api_key=${api_key}`)
    });
    return { data, isLoading, isError }
}

export function useGetPaginationMovies(slug: string, fetchUrl: string, pageNumber: number) {
    const { data, isLoading, isError } = useQuery({
        queryKey: [`category: ${slug} page number: ${pageNumber}`],
        queryFn: async () => await fetcherFunc(fetchUrl)
    });
    return { data, isLoading, isError }
}
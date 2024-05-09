import { baseUrl, api_key } from "../api";

export const fetcherFunc = async (url: string) => {
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
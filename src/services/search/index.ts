import { api_key, baseUrl } from "../api"

const fetcherFunc = async (url: string) => {
    try {
        const res = await fetch(url, {cache: 'no-store'})
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getSearchedMovies(searchParam: string) {
    const actor = await fetcherFunc(`${baseUrl}/search/movie?query=${searchParam}&include_adult=false&language=en-US&page=1&api_key=${api_key}`)
    return actor;
}
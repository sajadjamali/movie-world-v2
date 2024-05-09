import { fetcherFunc } from "@/services/dataFeching";
import { useQuery } from "@tanstack/react-query";
import { baseUrl, api_key } from "@/services/api";

export function useGetSwipperMovies(fetchUrl: string) {
    const { data, isPending, isError } = useQuery({
        queryKey: ['swipper movies'],
        queryFn: async () => await fetcherFunc(fetchUrl)
    });
    return { data, isPending, isError }
}

export function useGetActorMovies(actorID: number, pageNumber: number) {
    const { data, isPending, isError } = useQuery({
        queryKey: [`actorID: ${actorID} page number: ${pageNumber}`],
        queryFn: async () => await fetcherFunc(`${baseUrl}/discover/movie?with_cast=${actorID}&page=${pageNumber}&api_key=${api_key}`)
    });
    return { data, isPending, isError }
}

export function useGetPaginationMovies(slug: string, fetchUrl: string, pageNumber: number) {
    const { data, isPending, isError } = useQuery({
        queryKey: [`${slug} - page number: ${pageNumber}`],
        queryFn: async () => await fetcherFunc(fetchUrl)
    });
    return { data, isPending, isError }
}

export function useGetSearchedItems(slug: string, selectedItem: string, fetchUrl: string, pageNumber: number) {
    const moviesOrActors = selectedItem === '1' ? 'movies' : 'actors';
    const { data, isPending, isError } = useQuery({
        queryKey: [`searchedTerm: ${slug} selectedItem: ${moviesOrActors} - pageNumber: ${pageNumber}`],
        queryFn: async () => await fetcherFunc(fetchUrl)
    });
    return { data, isPending, isError }
}
import { useQuery } from "@tanstack/react-query";

const fetcherFunc = async (url: string) => {
    try {
        const res = await fetch(url, { cache: 'no-store' })
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export function useGetSearchedItems(slug: string, selectedItem: string, fetchUrl: string, pageNumber: number) {
    const moviesOrActors = selectedItem === '1' ? 'movies' : 'actors';
    const { data, isLoading, isError } = useQuery({
        queryKey: [`searchedTerm: ${slug} selectedItem: ${moviesOrActors} - pageNumber: ${pageNumber}`],
        queryFn: async () => await fetcherFunc(fetchUrl)
    });
    return { data, isLoading, isError }
}
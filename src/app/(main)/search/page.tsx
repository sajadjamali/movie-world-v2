import { Metadata } from 'next';
import Movie from '@/components/Movie';
import { getSearchedMovies } from '@/services/search';

export async function generateMetadata({ searchParams }: {
    searchParams?: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {

    return {
        title: `search for ${searchParams?.s}`,
        description: `search for ${searchParams?.s}`
    }
}

const Page = async ({ searchParams }:
    {
        searchParams?: { [key: string]: string | string[] | undefined }
    }) => {

    const searchedMovies = await getSearchedMovies(searchParams?.s as string)

    if(!searchedMovies.results.length) return <div className='mt-10'>There are no items</div>
    console.log(searchedMovies)

    return (
        <div className='mt-10'>search</div>
    )
}

export default Page;
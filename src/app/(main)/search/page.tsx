import PaginationSearch from '@/components/PaginationSearch';
import type { Metadata } from 'next';

export async function generateMetadata({ searchParams }: {
    searchParams?: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {

    return {
        title: `search for ${searchParams?.s}`,
        description: `search | ${searchParams?.s}`
    }
}

const Page = async ({ searchParams }:
    {
        searchParams?: { [key: string]: string | string[] | undefined }
    }) => {

    return (
        <div className='mt-16'>
            {/* <div className="select relative flex h-[3em] overflow-hidden ring-2 ring-yellow-500 w-10/12 min-[400px]:w-6/12 sm:w-5/12 lg:w-3/12 2xl:w-2/12 mx-auto rounded-md">
                <select onChange={(e) => setSelectedItem(e.target.value)}>
                    <option value="1">Movies</option>
                    <option value="2">Actors</option>
                </select>
            </div> */}
            <PaginationSearch searchValue={`${searchParams?.s}`} />
        </div>
    )
}

export default Page;
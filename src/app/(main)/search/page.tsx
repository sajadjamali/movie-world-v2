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

        console.log('hiiiiii')

    return (
        <div className='mt-16'>
            <PaginationSearch searchValue={`${searchParams?.s}`} />
        </div>
    )
}

export default Page;
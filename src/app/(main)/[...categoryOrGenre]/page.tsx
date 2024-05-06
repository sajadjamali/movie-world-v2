import PaginationMovies from "@/components/PaginationMovies";
import NotFound from "@/components/NotFound";
import { Metadata } from 'next';
import { convertToPascalCase, isNotFound } from "@/utils";

export async function generateMetadata({ params }: { params: { categoryOrGenre: string[] } }): Promise<Metadata> {
    if (isNotFound(params.categoryOrGenre))
        return {
            title: 'not found page',
            description: 'not found page'
        }
    else
        return {
            title: `${params.categoryOrGenre[0]} | ${convertToPascalCase(params.categoryOrGenre[1])}`,
            description: `movies of ${convertToPascalCase(params.categoryOrGenre[1])}`
        }
}

const Page = ({ params }: { params: { categoryOrGenre: string[] } }) => {

    if (isNotFound(params.categoryOrGenre))
        return <NotFound />

    return (
        <PaginationMovies slug={params.categoryOrGenre[1]} />
    )
}

export default Page;

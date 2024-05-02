import PaginationMovies from "@/components/PaginationMovies";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return {
        title: `genre | ${params.slug}`,
        description: `movies of ${params.slug}`
    }
}

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <PaginationMovies slug={params.slug} />
    )
}

export default Page;
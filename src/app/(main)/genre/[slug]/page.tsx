import type { Metadata } from 'next'
import PaginationMovies from "@/components/PaginationMovies";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return {
        title: `genre | ${params.slug}`,
        description: ''
    }
}

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <PaginationMovies slug={params.slug} />
    )
}

export default Page;
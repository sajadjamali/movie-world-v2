import { Suspense } from 'react'
import Slider from "@/components/Slider";
import CategorySection from "@/components/CategorySection";
import MyDivider from "@/components/muiComponents/MyDivider";

const Page = async () => {
    return (
        <div className="pb-8">
            <Suspense fallback={<p>Loading...</p>}>
                <Slider />
            </Suspense>
            <main className="pt-5">
                <MyDivider label="Now Playing" src="nowPlaying.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="" sectionName="now_playing" />
                </Suspense>
                <MyDivider label="Popular" src="popular.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="fade-right" sectionName="popular" />
                </Suspense>
                <MyDivider label="Top Rated" src="topRated.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="flip-left" sectionName="top_rated" />
                </Suspense>
                <MyDivider label="Upcoming" src="upcoming.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="zoom-in-up" sectionName="upcoming" />
                </Suspense>
            </main>
        </div>
    );
}

export default Page;
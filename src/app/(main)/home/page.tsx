import MySwiper from "@/components/Slider";
import CategorySection from "@/components/CategorySection";
import MyDivider from "@/components/muiComponents/MyDivider";
import { getMovies } from "@/services/dataFeching";
import { Suspense } from 'react';

const Page = async () => {

    const nowPlaying = await getMovies("now_playing", 1);
    const popular = await getMovies("popular", 2);
    const topRated = await getMovies("top_rated", 1);
    const upcoming = await getMovies("upcoming", 2);

    return (
        <div className="pb-8">
            <Suspense fallback={<p>Loading...</p>}>
                <MySwiper />
            </Suspense>
            <main className="pt-5">
                <MyDivider label="Now Playing" src="/assets/imgs/nowPlaying.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="" sectionName="Now Playing" href="/category/now_playing" movies={nowPlaying.results} />
                </Suspense>
                <MyDivider label="Popular" src="/assets/imgs/popular.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="fade-right" sectionName="Popular" href="/category/popular" movies={popular.results} />
                </Suspense>
                <MyDivider label="Top Rated" src="/assets/imgs/topRated.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="flip-left" sectionName="Top Rated" href="/category/top_rated" movies={topRated.results} />
                </Suspense>
                <MyDivider label="Upcoming" src="/assets/imgs/upcoming.png" />
                <Suspense fallback={<p>Loading...</p>}>
                    <CategorySection effect="zoom-in-up" sectionName="Upcoming" href="/category/upcoming" movies={upcoming.results} />
                </Suspense>
            </main>
        </div>
    );
}

export default Page;
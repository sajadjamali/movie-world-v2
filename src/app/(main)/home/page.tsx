import MySwiper from "@/components/Slider";
import CategorySection from "@/components/CategorySection";
import MyDivider from "@/components/muiComponents/MyDivider";
import { getMovies } from "@/services/dataFeching";

const Page = async () => {

    const nowPlaying = await getMovies("now_playing", 1);
    const popular = await getMovies("popular", 2);
    const topRated = await getMovies("top_rated", 1);
    const upcoming = await getMovies("upcoming", 2);

    return (
        <div className="pb-8">
            <MySwiper />
            <main className="pt-5">
                <MyDivider label="Now Playing" src="/assets/imgs/nowPlaying.png" />
                <CategorySection effect="" sectionName="Now Playing" href="/category/now_playing" movies={nowPlaying.results} />
                <MyDivider label="Popular" src="/assets/imgs/popular.png" />
                <CategorySection effect="fade-right" sectionName="Popular" href="/category/popular" movies={popular.results} />
                <MyDivider label="Top Rated" src="/assets/imgs/topRated.png" />
                <CategorySection effect="flip-left" sectionName="Top Rated" href="/category/top_rated" movies={topRated.results} />
                <MyDivider label="Upcoming" src="/assets/imgs/upcoming.png" />
                <CategorySection effect="zoom-in-up" sectionName="Upcoming" href="/category/upcoming" movies={upcoming.results} />
            </main>
        </div>
    );
}

export default Page;
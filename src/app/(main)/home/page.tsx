import MySwiper from "@/components/Slider";
import CategorySection from "@/components/CategorySection";
import MyDivider from "@/components/muiComponents/MyDivider";

const Page = async () => {
    return (
        <div className="pb-8">
            <MySwiper />
            <main className="pt-5">
                <MyDivider label="Now Playing" src="nowPlaying.png" />
                <CategorySection effect="" sectionName="now_playing" />
                <MyDivider label="Popular" src="popular.png" />
                <CategorySection effect="fade-right" sectionName="popular" />
                <MyDivider label="Top Rated" src="topRated.png" />
                <CategorySection effect="flip-left" sectionName="top_rated" />
                <MyDivider label="Upcoming" src="upcoming.png" />
                <CategorySection effect="zoom-in-up" sectionName="upcoming" />
            </main>
        </div>
    );
}

export default Page;
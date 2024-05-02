import Link from "next/link";
import BackGround from '@/components/animation/BackGround';
import '../styles/firstPage.css';

const Page = async () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black">
      <section className="relative h-full">
        <BackGround />
        <svg id="siteName" className="z-20 absolute top-1/3 w-full" style={{ backgroundColor: "rgba(10, 10, 10, 0.55)" }}>
          <text className="max-[450px]:text-5xl text-7xl sm:text-8xl text-red-800 font-bold" x="50%" y="50%" dy=".2em" textAnchor="middle">
            Movie World
          </text>
        </svg>
        <Link style={{ transform: "translateX(-50%)", transition: "transform" }} href="/home" id="letsGoLink"
          className="bg-red-700 mx-auto hover:bg-rose-800 text-lg font-bold w-10/12 mt-40 min-[400px]:w-7/12 sm:w-5/12 md:w-3/12 xl:w-2/12 text-center text-white py-2 absolute z-20 rounded-md top-1/3">
          <p className="animate-bounce">
            Lets Go
          </p>
        </Link>
      </section>
    </div>
  );
}

export default Page;
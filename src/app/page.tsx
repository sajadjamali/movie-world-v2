import '../styles/firstPage.css';
import LetsGoLink from "@/components/LetsGoLink";
import BackGround from '@/components/animation/BackGround';

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
        <LetsGoLink />
      </section>
    </div>
  );
}

export default Page;
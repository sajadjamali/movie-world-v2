import { imgBaseUrl } from "@/services/api";
import Image from "next/image";
import Person3Icon from '@mui/icons-material/Person3';
import Biography from "@/components/Biography";
import ActorMovies from "@/components/ActorMovies";
import "../../../../styles/actorInformation.css";
import { getActor } from "@/services/dataFeching";
import { setIcon } from "@/utils";
import Particle from "@/components/animation/Particle";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const actor = await getActor(params.id);
    return {
        title: `actor | ${actor.name}`,
        description: actor.biography,
        icons: {
            icon: `${imgBaseUrl}${actor.profile_path}`
        }
    }
}

const Page = async ({ params }: { params: { id: string } }) => {

    const actor = await getActor(params.id);

    return (
        <div className="px-4 py-7 lg:px-6">
            <Particle />
            <section className={`${actor?.biography ? 'lg:flex' : 'flex flex-col justify-center items-center'} lg:space-x-5 xl:space-x-8`}>
                <div id="actorCard" className="rounded-lg mx-auto bg-neutral-950 lg:mx-0 p-4 min-[450px]:w-10/12 sm:w-8/12 md:w-6/12 xl:w-5/12">
                    <p className="text-white text-center text-lg">{actor.name}</p>
                    <Image id="actorImg" className="rounded-lg mt-2 min-[300px]:h-72 md:h-96 w-full" src={`${imgBaseUrl}${actor.profile_path}`} width={100} height={100} alt="not found" unoptimized />
                    <div className="mt-3 divide-y divide-gray-300">
                        {Object.keys(actor).map((key, index) => (
                            (key == "birthday" || key == "known_for_department" || key == "place_of_birth" || (key == "deathday" && actor.deathday)) &&
                            <div key={index} className="text-white pt-3 mt-1 flex items-center space-x-2" >
                                {index == 3 ? setIcon(10) : index == 4 ? setIcon(12) : setIcon(index)}
                                <p><span className="text-rose-500 text-lg">
                                    {key == "place_of_birth" ? "place of birth" : key == "known_for_department" ? "job" : key}: </span>{actor[key] ? actor[key] : "Not available"}
                                </p>
                            </div>
                        ))}
                        <div className="text-white pt-2 mt-1 flex items-center space-x-2" >
                            <Person3Icon className="text-yellow-500" />
                            <p className="mt-1"><span className="text-rose-500 text-lg">height: </span>{160 + Math.floor(Math.random() * 36)}cm</p>
                        </div>
                    </div>
                </div>
                {
                    actor?.biography ? < Biography imdbLink={actor.imdb_id} biography={actor.biography} /> : <p className="text-white text-center text-xl mt-10">Sorry no Biography yet ...</p>
                }
            </section>
            <ActorMovies actorName={actor.name} actorID={actor.id} />
        </div >
    )
}

export default Page;
"use client"
import React, { useState } from 'react';
import { ActorType } from '@/types';
import Actor from './Actor';

const MovieActors: React.FC<{ actors: ActorType[] }> = ({ actors }) => {

    const [showAllActors, setShowAllActors] = useState<boolean>(false);

    return (
        <section className="mt-6">
            <p className="text-xl text-center mb-3 text-rose-600">
                Actors
            </p>
            <div className="px-3 grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 justify-items-center gap-3">
                {
                    actors.map((actor: ActorType) => (
                        actor.profile_path &&
                        <Actor key={actor.id} actor={actor} />
                    )).slice(0, showAllActors ? actors.length - 1 : 8)
                }
            </div>
            <button className='bg-yellow-600 px-2 py-1 rounded-md block w-32 mx-auto hover:bg-red-600 mt-5' onClick={() => setShowAllActors(!showAllActors)}>{showAllActors ? 'show less' : 'show more'}</button>
        </section>
    )
}

export default MovieActors;
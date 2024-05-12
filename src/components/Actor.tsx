import React from 'react';
import Link from "next/link";
// import '../styles/ihover.css';
import Image from "next/image";
import { ActorType } from "@/types";
import { imgBaseUrl } from '@/services/api';

const Actor: React.FC<{ actor: ActorType }> = ({ actor }) => {
    return (
        <div data-aos="zoom-out-down">
            <Link href={`/actorInformation/${actor.id}`}>
                <Image
                    className="rounded-md h-48 border-2 border-white transition-transform duration-300 ease-in-out hover:scale-105"
                    width={150} height={50}
                    unoptimized
                    src={`${imgBaseUrl}${actor.profile_path}`}
                    alt={actor.name}
                />
                <p className="mt-2 text-center">
                    {actor?.name}
                </p>
            </Link >
        </div >
    );
}

export default Actor;
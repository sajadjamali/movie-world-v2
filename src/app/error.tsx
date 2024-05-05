'use client'
import Image from "next/image";
import error from '../assets/error.gif';
 
const Error = () => {
    return (
        <section className="h-screen w-4/12 m-auto flex flex-col items-center justify-center">
            <Image width={200} height={200} className="rounded-full" src={error} alt="Error" />
            <p className="font bold text-3xl mt-3 text-center text-white">Error</p>
        </section>
    );
}

export default Error;
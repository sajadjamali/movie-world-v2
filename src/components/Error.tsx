'use client'
import Image from "next/image";
import error from '../assets/error.gif';
import Link from "next/link";

const Error = () => {
    return (
        <section className="h-screen w-4/12 space-y-5 m-auto flex flex-col items-center justify-center">
            <Image width={200} height={200} className="rounded-full" src={error} alt="Error" />
            <p className="font bold text-3xl text-center text-white">Error</p>
            <Link href="/home" className="text-xl text-white bg-rose-600 rounded-md w-48 text-center py-2">Home</Link>
        </section>
    );
}

export default Error;
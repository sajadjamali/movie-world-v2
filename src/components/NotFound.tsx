import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound:React.FC = () => {
    return (
        <section className="h-screen w-4/12 space-y-5 m-auto flex flex-col items-center justify-center">
            <Image width={200} height={200} className="rounded-full" src="/assets/gifs/notFound.gif" alt="not found" />
            <p className="text-2xl text-white text-center">Not Found 404</p>
            <Link href="/home" className="text-xl text-white bg-rose-600 rounded-md w-48 text-center py-2">Home</Link>
        </section>
    );
}

export default NotFound;
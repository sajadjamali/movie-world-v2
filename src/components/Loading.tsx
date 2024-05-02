import React from 'react';
import Image from 'next/image';

const Loading: React.FC = () => {
    return (
        <section className="h-screen w-4/12 m-auto flex flex-col items-center justify-center">
            <Image width={200} height={200} className="rounded-full" src="/assets/gifs/loading.gif" alt="not found" />
            <p className="text-2xl text-white mt-3 text-center">Loading...</p>
        </section>
    )
}

export default Loading
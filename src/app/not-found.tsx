import Image from "next/image";

const NotFound = () => {
    return (
        <section className="h-screen w-4/12 m-auto flex flex-col items-center justify-center">
            <Image width={200} height={200} className="rounded-full" src="/assets/gifs/notFound.gif" alt="not found" />
            <p className="text-2xl mt-3 text-white text-center">Not Found 404</p>
        </section>
    );
}

export default NotFound;
"use client"
import React, { useState } from "react";
import Loading from "./Loading";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import "../styles/actorInformation.css";
import MoviesList from "./MoviesList";
import { useGetActorMovies } from "@/hooks";

const ActorMovies: React.FC<{ actorName: string, actorID: number }> = ({ actorName, actorID }) => {

    const [pageNumber, setPageNumber] = useState<number>(1);
    const { data, isPending, isError } = useGetActorMovies(actorID, pageNumber);

    if (isPending) return <Loading />
    if (isError) return <p className="my-10 text-white text-center text-xl">error😑</p>

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    return (
        <>
            <MoviesList title={`Movies of ${actorName}`} movies={data.results} />
            <div className="flex justify-center text-white my-7">
                <Pagination
                    color="secondary"
                    count={data.total_pages > 500 ? 500 : data.total_pages}
                    page={pageNumber}
                    onChange={handleChange}
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            sx={{
                                '&.MuiPaginationItem-root': {
                                    fontSize: '20px',
                                    color: 'white',
                                },
                                '&.MuiPaginationItem-root:hover': {
                                    backgroundColor: 'aqua',
                                },
                            }}
                        />
                    )}
                />
            </div>
        </>
    )
}

export default ActorMovies;
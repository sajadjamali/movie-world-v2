"use client"
import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import MoviesList from "@/components/MoviesList";
import { getFetchUrl } from "@/utils";
import { convertToPascalCase } from '@/utils';
import { useGetPaginationMovies } from "@/hooks";
import Loading from "./Loading";
import Error from "@/components/Error";

const PaginationMovies: React.FC<{ slug: string }> = ({ slug }) => {

    const [pageNumber, setPageNumber] = useState<number>(1);
    let fetchUrl: string = getFetchUrl(slug, pageNumber)
    const { data, isPending, isError } = useGetPaginationMovies(slug, fetchUrl, pageNumber);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    if (isPending) return <Loading />
    if (isError) return <Error />

    return (
        <>
            <MoviesList title={`${convertToPascalCase(slug)}`} movies={data.results} />
            <div className="flex justify-center text-white my-10">
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

export default PaginationMovies;
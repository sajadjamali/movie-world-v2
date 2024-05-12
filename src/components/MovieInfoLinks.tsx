import React from 'react';
import Btn from './muiComponents/Btn';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MovieInfoLinks: React.FC<{ homePage: string, imdbId: string, videos: string }> = ({ homePage, imdbId, videos }) => {
    return (
        <div className='grid px-1 justify-center mt-10 grid-cols-2 gap-3 min-[450px]:flex'>
            {
                homePage &&
                <Btn href={homePage} icon={<LanguageIcon />} text="Website" />
            }
            <Btn href={`https://www.imdb.com/title/${imdbId}`} icon={<MovieIcon />} text="IMDB" />
            {
                videos &&
                <Btn href={`https://www.youtube.com/embed/${videos}`} icon={<TheatersIcon />} text="Trailer" />
            }
            <Btn href="/home" icon={<ArrowBackIcon />} text="Back" />
        </div >
    )
}

export default MovieInfoLinks;
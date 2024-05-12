import { baseUrl } from "@/services/api";
import { ActorType, MovieType } from "@/types";
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import { genres, categories } from "@/constant";
import { ProductionCountrieType } from "@/types";
import CloseIcon from '@mui/icons-material/Close';
import AnimationIcon from '@mui/icons-material/Animation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const api_key = process.env.NEXT_PUBLIC_API_KEY;

export const getGenreId = (genreName: string): number => {
    let genreId: number = 0;
    genres.map(genre => {
        if (genre.name == genreName) {
            genreId = genre.id;
            return;
        }
    })
    return genreId;
}

// ------------------------------------------------------------------

export const getFirstFifteenWords = (str: string): string => {
    if (str) {
        const words = str.split(' ');
        return words.length > 15 ? words.slice(0, 15).join(' ') : str;
    } else return '';
}

// ------------------------------------------------------------------

export const getCountries = (data: ProductionCountrieType[]): string => {
    let countries: string = ""
    if (data.length > 0) {
        let arr = data.map((p: ProductionCountrieType) => {
            if (p.name == "United States of America")
                return "America"
            else return p.name
        })
        countries = arr.join("-")
    } else {
        countries = "America"
    }
    return countries;
}

// -------------------------------------------------------------------

export const getBiography = (biography: string): string => {
    if (biography.split(' ').length < 100) {
        return biography + "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium ad tenetur cum inventore dolores cumque aliquid. Quisquam commodi non necessitatibus a. Officia praesentium commodi quos tempore sunt perferendis temporibus corrupti quasi, rem recusandae accusantium sit necessitatibus! Necessitatibus reiciendis totam architecto mollitia, magnam dignissimos voluptatem fugiat commodi saepe optio velit nostrum repellat! Quidem, autem eveniet. Itaque nemo neque ex ea illo! Ipsa porro molestias doloremque voluptates cumque quo esse, dolor blanditiis nam iure mollitia omnis sit unde eos, distinctio praesentium magni quos quisquam, sapiente autem assumenda. At error quos ullam numquam rem, cupiditate molestiae ducimus enim sequi porro autem nemo itaque quibusdam mollitia, ab commodi blanditiis corporis labore obcaecati consectetur sunt iste? Quam corporis dolorem exercitationem tempora quisquam quod quo pariatur dignissimos aperiam incidunt inventore."
    } else return biography
}

// -------------------------------------------------------------------

export const getFetchUrl = (slug: string, pageNumber: number, selectedItem?: string): string => {
    if (selectedItem) {
        let movieOrPerson: string = '';
        if (selectedItem === '1')
            movieOrPerson = 'movie';
        else
            movieOrPerson = 'person';
        return `${baseUrl}/search/${movieOrPerson}?query=${slug}&include_adult=false&language=en-US&page=${pageNumber}&api_key=${api_key}`;
    }
    else {
        let fetchUrl = '';
        if (isGenre(slug)) {
            const genreId = getGenreId(slug);
            return fetchUrl = `${baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${api_key}`
        } else {
            return fetchUrl = `${baseUrl}/movie/${slug}?page=${pageNumber}&api_key=${api_key}`
        }
    }
}

// -------------------------------------------------------------------

export const convertToPascalCase = (str: string): string => {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// -------------------------------------------------------------------

export const setIcon = (index: number) => {
    switch (index) {
        case 0:
            return <HomeIcon />
        case 1:
            return <MovieCreationIcon />
        case 2:
            return <AnimationIcon />
        case 3:
            return <InsertChartIcon />
        case 4:
            return <BookIcon />
        case 5:
            return <SupervisedUserCircleIcon />
        case 9:
            return <WorkIcon fontSize="small" className="text-yellow-500" />
        case 10:
            return <CalendarMonthIcon fontSize="small" className="text-yellow-500" />
        case 11:
            return <LocationOnIcon fontSize="small" className="text-yellow-500" />
        case 12:
            return <CloseIcon fontSize="small" className="text-yellow-500" />
    }
}

// -------------------------------------------------------------------

export const isExistPoster = (arr: ActorType[] | MovieType[]): boolean => {
    for (let i = 0; i < arr.length; i++)
        if ((arr[i] as MovieType).poster_path || (arr[i] as ActorType).profile_path)
            return true;
    return false;
}

// -------------------------------------------------------------------

export const isGenre = (slug: string): boolean => {
    return genres.some(genre => genre.name === slug);
}

export const isNotFound = (params: string[]): boolean => {
    const isCategory = categories.some(categorie => categorie === params[1]);
    const temp = isGenre(params[1])
    if (params.length !== 2 || (params[0] !== 'category' && params[0] !== 'genre')) return true;
    else if (params[0] === 'category' && !isCategory) return true;
    else if (params[0] === 'genre' && !temp) return true;
    else return false;
}
export interface MovieType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: false,
    vote_average: number,
    vote_count: number,
    media_type?: string
}

export interface GenreType {
    id: number,
    name: string
}

export interface ProductionCountrieType {
    iso_3166_1: string,
    name: string
}

export interface ActorType {
    adult: boolean,
    also_known_as: string[],
    biography: string,
    birthday: string,
    deathday: string | null,
    gender: number,
    homepage: string | null,
    id: number,
    imdb_id: string,
    known_for_department: string,
    name: string,
    place_of_birth: string,
    popularity: number,
    profile_path: string | null
}

export interface LinkType {
    title: string,
    href: string
}

export interface DownloadLinkType {
    id: number,
    theme: string,
    version: string,
    quality: string,
    size: string,
    encoder: string
}

export type ClickHandler = () => void;

export interface RuleAndQuestionType {
    title: string,
    description: string
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
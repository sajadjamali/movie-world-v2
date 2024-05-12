import { GenreType, LinkType, DownloadLinkType, RuleAndQuestionType } from "@/types";

export const links: LinkType[] = [
    { title: 'Home', href: "/home" }, { title: 'Now Playing', href: '/category/now_playing' },
    { title: 'Popular', href: "/category/popular" }, { title: 'Upcoming', href: '/category/upcoming' },
    { title: 'Top Rated', href: '/category/top_rated' }, { title: 'About Us', href: '/aboutUs' },
    { title: 'Movie Genre', href: '' },
];

export const downloadLinks: DownloadLinkType[] = [
    {
        id: 5,
        theme: 'red',
        version: 'main',
        quality: 'WEB-DL 1080p',
        size: '1.87 GB',
        encoder: 'MovieWorld'
    },
    {
        id: 6,
        theme: 'red',
        version: 'main',
        quality: 'WEB-DL 1080p',
        size: '1.87 GB',
        encoder: 'Pahe'
    },
    {
        id: 8,
        theme: 'yellow',
        version: 'subtitle',
        quality: 'WEB-DL 1080p',
        size: '1.87 GB',
        encoder: 'MovieWorld'
    },
    {
        id: 9,
        theme: 'yellow',
        version: 'subtitle',
        quality: 'WEB-DL 1080p',
        size: '1.87 GB',
        encoder: 'Pahe'
    },
    {
        id: 2,
        theme: 'blue',
        version: 'double',
        quality: 'WEB-DL 720p',
        size: '0.97 GB',
        encoder: 'MovieWorld'
    },
    {
        id: 3,
        theme: 'blue',
        version: 'double',
        quality: 'WEB-DL 480p',
        size: '0.55 GB',
        encoder: 'Paheld'
    },
]

export const breakpoints = {
    custom: '@media (min-width: 400px)',
    customXS: '@media (min-width: 500px)',
    customSM: '@media (min-width: 600px)',
    customMD: '@media (min-width: 700px)'
};

export const categories: string[] = ['now_playing', 'popular', 'upcoming', 'top_rated'];

export const genres: GenreType[] = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science_Fiction"
    },
    {
        id: 10770,
        name: "TV_Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }
]

const description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quidem!';

export const rules: RuleAndQuestionType[] = [
    {
        title: 'rule 1',
        description
    },
    {
        title: 'rule 2',
        description
    },
    {
        title: 'rule 3',
        description
    },
    {
        title: 'rule 4',
        description
    },
    {
        title: 'rule 5',
        description
    },
    {
        title: 'rule 6',
        description
    },
    {
        title: 'rule 7',
        description
    },
    {
        title: 'rule 8',
        description
    },
    {
        title: 'rule 9',
        description
    },
    {
        title: 'rule 10',
        description
    }
]

export const questions: RuleAndQuestionType[] = [
    {
        title: 'question 1',
        description
    },
    {
        title: 'question 2',
        description
    },
    {
        title: 'question 3',
        description
    },
    {
        title: 'question 4',
        description
    },
    {
        title: 'question 5',
        description
    },
    {
        title: 'question 6',
        description
    },
    {
        title: 'question 7',
        description
    },
    {
        title: 'question 8',
        description
    },
    {
        title: 'question 9',
        description
    },
    {
        title: 'question 10',
        description
    }
]
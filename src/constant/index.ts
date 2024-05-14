import { GenreType, LinkType, DownloadLinkType, RuleAndQuestionType } from "@/types";

export const links: LinkType[] = [
    { title: 'Home', href: "/home" }, { title: 'Now Playing', href: '/category/now_playing' },
    { title: 'Popular', href: "/category/popular" }, { title: 'Upcoming', href: '/category/upcoming' },
    { title: 'Top Rated', href: '/category/top_rated' }, { title: 'About Us', href: '/aboutUs' },
    { title: 'Movie Genre', href: '' },
];

export const blurHash = 'data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFBd1VHLzhRQUp4QUFBUU1EQWdRSEFBQUFBQUFBQUFBQUFRSURCQUFGRVJJaEJqR0JrU0pCUW1GeHNjSC94QUFWQVFFQkFBQUFBQUFBQUFBQUFBQUFBQUFDQlAvRUFCb1JBQUlEQVFFQUFBQUFBQUFBQUFBQUFBRUNBQU1TRVVILzJnQU1Bd0VBQWhFREVRQS9BRGY0c3VFaTlQQnRoeFVVZ0JLRUhJV0FkMUU0MkFCNWVaeDgxRG5JY3ZVbTVMaXpFTnBqeHdzdHVNbENuTUhKQTY4OC9WWnVUY1pyVDdMS0pUb2FXZ2FrYWlVN2UzVTk2Uis0VEE2RkprdUpPdzhLc2VuSDZlOUhJTnZXbFNKbXM1OW4vOWs9JyAvPgogICAgPC9zdmc+CiAg';

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
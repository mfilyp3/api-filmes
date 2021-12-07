export interface IMovieData {
    title: string;
    id: number;
    poster_path: string;
    backdrop_path?: string;
    popularity: string;

    release_date: string;

    vote_average: number;
    vote_count: number;

    genres?: {
        name: string
    }[]

    overview?: string;
    status?: string
}
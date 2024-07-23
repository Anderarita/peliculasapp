import type { Movie } from "../../core/entities/movie.entity";
import type { Result } from "../interfaces/movie-db.response";

export class MovieMapper{
    static fromMovieDBResultToEntity(Result: Result) : Movie{
        return {
            id: Result.id,
            title: Result.title,
            description: Result.overview,
            releaseDate: new Date(Result.release_date),
            reating: Result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${Result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${Result.backdrop_path}`,
        }

    }
}
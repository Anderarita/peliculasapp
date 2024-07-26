import type {FullMovie, Movie} from '../../core/entities/movie.entity';
import type {MovieDBMovie, Result} from '../interfaces/movie-db.response';

export class MovieMapper {
  static fromMovieDBResultToEntity(Result: Result): Movie {
    return {
      id: Result.id,
      title: Result.title,
      description: Result.overview,
      releaseDate: new Date(Result.release_date),
      reating: Result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${Result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${Result.backdrop_path}`,
    };
  }

  static fromMovieDbToEntity(movie: MovieDBMovie): FullMovie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      reating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map(genre => genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(
        company => company.name,
      ),
    };
  }
}

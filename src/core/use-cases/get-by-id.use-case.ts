import {HttpAdapter} from '../../config/adapters/http/http.adapter';
import {MovieDBMovie, movieDBResponse} from '../../infrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../infrastructure/mappers/movie.mapper';
import {FullMovie, Movie} from '../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`, {});
    const FullMovie = MovieMapper.fromMovieDBResultToEntity(movie);
    return FullMovie;
  } catch (error) {
    console.log(error);
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};
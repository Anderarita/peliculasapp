import {HttpAdapter} from '../../config/adapters/http/http.adapter';
import {movieDBResponse} from '../../infrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../infrastructure/mappers/movie.mapper';
import {Movie} from '../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRatedMovies = await fetcher.get<movieDBResponse>(
      '/top_rated',
      {},
    );
    
    return topRatedMovies.results.map((result=> MovieMapper.fromMovieDBResultToEntity(result)));
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies -');
  }
};
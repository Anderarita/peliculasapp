import {HttpAdapter} from '../../config/adapters/http/http.adapter';
import {movieDBResponse} from '../../infrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../infrastructure/mappers/movie.mapper';
import {Movie} from '../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<movieDBResponse>(
      '/popular',
      {},
    );
    
    return popular.results.map((result=> MovieMapper.fromMovieDBResultToEntity(result)));
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies -Popular');
  }
};
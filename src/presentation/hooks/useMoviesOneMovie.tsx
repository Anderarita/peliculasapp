import { useEffect, useState } from "react";
import * as UseCase from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/entities/movie.entity";

export const useMoviesOneMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();

    useEffect(() => {
        loadMovie();
    },[movieId])

    const loadMovie = async () => {
        setIsLoading(true)
        const fullMovie = await UseCase.getMovieByIdUseCase(movieDBFetcher, movieId);
        setMovie(fullMovie);
        setIsLoading(false);
    };
  return {
    // Properties
    isLoading,
    movie,
    //Methods
  };
};

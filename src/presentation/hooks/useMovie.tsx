import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import * as UseCases from "../../core/use-cases"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

export const useMovie = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>();
    const [popular, setPopular] = useState<Movie[]>();
    const [topRated, setTopRated] = useState<Movie[]>();
    const [upcoming, setUpcoming] = useState<Movie[]>();
    const [isLoading, setIsLoading] = useState(true);

    let popularPageNumber = 1;
    let topRatedPageNumber = 1;
    let upcomingPageNumber = 1;

    useEffect(()=>{
        initialLoad();
    },[]);

    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);

        const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies]= await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);
    };

    return {
        //Properties
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading,
        //Methodos
        setIsLoading,
        popularNextPage: async () => {
            popularPageNumber++;
            const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {page: popularPageNumber});
            setPopular(prev => [...prev!, ...popularMovies]);
        },
        topRatedNextPage: async() => {
            topRatedPageNumber++;
            const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher, {page: topRatedPageNumber});
            setTopRated(prev => [...prev!, ...topRatedMovies]);
        },
        upcomingNextPage: async() => {
            upcomingPageNumber++;
            const upcomingMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher);
            setUpcoming(prev => [...prev!, ...upcomingMovies]);
        }
    };
}
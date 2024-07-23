import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter ({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '4299efcbd157bdc3bcd30efe700a5c0b',
        language: 'es',
    }
})
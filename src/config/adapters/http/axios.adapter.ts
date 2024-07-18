import { HttpAdapter } from "./http.adapter";
import axios, {AxiosInstance} from 'axios';

interface Options {
    baseUrl: string;
    params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter{

    private axiosInstence: AxiosInstance;

    constructor( options: Options) {
        this.axiosInstence = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        })
    }

    async get<T>(url: string, options: Record<string, unknown>): Promise<T> {
        try {
            const {data} = await this.axiosInstence.get(url, options);
            return data;
        } catch (error) {
            throw new Error(`Error fteching get: ${url}1`);
        }
    }   
}
import { useQuery } from "react-query"

import { fetchSearchMovie } from "apis/fetchSearchMovie"

export const useSearchMovieQuery = (params, options) => {
    return useQuery(['searchMovieQuery', params], () => fetchSearchMovie(params), options)
}
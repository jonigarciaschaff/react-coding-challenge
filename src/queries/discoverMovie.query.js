import { useQuery } from "react-query"

import { fetchDiscoverMovie } from "apis/fetchDiscoverMovie"

export const useDiscoverMovieQuery = (params, options) => {
    return useQuery('discoverMovieQuery', () => fetchDiscoverMovie(params), options)
}
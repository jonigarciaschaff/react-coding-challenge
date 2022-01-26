import { get } from "utils/api"

export const fetchDiscoverMovie = async (params) => {
    const { data } = await get('discover/movie', params)
    return data
}

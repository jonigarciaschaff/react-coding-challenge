import { get } from "utils/api"

export const fetchSearchMovie = async (params) => {
    const { data } = await get('search/movie', params)
    return data
}

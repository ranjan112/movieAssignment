import { DETAILS_ENDPOINT, LATEST_MOVIES_ENDPOINT, SEARCH_MOVIES_ENDPOINT, axios_instance } from "./constants"

export const fetch_movies = async (page: number) => {
    return await axios_instance.get(LATEST_MOVIES_ENDPOINT)
    .then(data => data.data)
    .catch(err => undefined)
}

export const movie_detail = async (movie_id: number) => {
    return await axios_instance.get(DETAILS_ENDPOINT+movie_id)
    .then(data => data.data)
    .catch(err => undefined)
}

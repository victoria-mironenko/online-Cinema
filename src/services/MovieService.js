import { MOVIES } from '../MOCK/movies'

class MovieServise {
     
    getAllMovie() {
        return Promise.resolve({ data: {} })
    }
}
export const movieServise = new MovieServise();
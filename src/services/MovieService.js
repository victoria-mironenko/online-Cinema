<<<<<<< HEAD
import { MOVIES } from "../MOCK/movies";

class MovieService {

    getAllMovies() {
        return Promise.resolve({ data: MOVIES })
    }

}

export const movieService = new MovieService();
=======
import { MOVIES } from '../MOCK/movies'

class MovieServise {
     
    getAllMovie() {
        return Promise.resolve({ data: {} })
    }
}
export const movieServise = new MovieServise();
>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3

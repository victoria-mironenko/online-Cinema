import { Component } from "./core";
<<<<<<< HEAD
import './components';
import { movieService } from "./services/MovieService";

=======
import './components'
import { movieServise } from "./services/MovieService";
>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3

export class App extends Component {
  constructor() {
    super();
<<<<<<< HEAD

    this.state = {
      movies: [],
      searchValue: '',
      selectedCategory: '',
    }
  }

  componentDidMount() {
    movieService.getAllMovies()
    .then(({ data }) => {
      this.setState((state) => {
        return {
          ...state,
          movies: data,
=======
      this.state = {
        movies: [],
        searchValue: '',
        selectedCategory: '',
      }
    
  }

  componentDidMount() {
    movieServise.getAllMovie()
    .then(({data}) => {
      this.setState((state) => {
        return {
          ...state,
          movies: data
>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3
        }
      })
    })
  }

  render() {
    console.log(this.state.movies)
    return (
<<<<<<< HEAD
      `
      <div id="shell">
        <it-header></it-header>
        <it-moviecard></it-moviecard>
      </div>

      `
=======
      `<div id="shell">
      <it-header> </it-header> 
      <it-moviecard></it-moviecard>
      </div>   

     `
>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3
    )
  }
}

customElements.define("my-app", App);

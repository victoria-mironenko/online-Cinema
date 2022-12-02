import { Component } from "./core";
import './components'
import { movieService } from "./services/MovieService";

export class App extends Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      searchValue: '',
      selectedCategory: ''
    }
  }

  componentDidMount() {
    movieService.getAllMovies()
      .then(({ data }) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data
          }
        })
      })
  }

  render() {
    return (
      `
        <div id="shell">
          <it-header></it-header>
          <movie-card title="qweqwe"></movie-card>
        </div>
      `
    )
  }
}

customElements.define("my-app", App);

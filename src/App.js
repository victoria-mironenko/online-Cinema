import { Component } from "./core";
import './components'
import { movieServise } from "./services/MovieService";

export class App extends Component {
  constructor() {
    super();
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
        }
      })
    })
  }

  render() {
    console.log(this.state.movies)
    return (
      `<div id="shell">
      <it-header> </it-header> 
      <it-moviecard></it-moviecard>
      </div>   

     `
    )
  }
}

customElements.define("my-app", App);

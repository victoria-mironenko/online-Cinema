import { Component } from "../../core";
<<<<<<< HEAD
import './moviecard.scss';

export class MovieCard extends Component {
    constructor() {
        super();
        this.props = {};
        this.state = {}; 
    }
=======

export class MovieCard extends Component {
>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3

    static get observedAttributes() {
        return ['title', 'poster', 'comments']
    }

<<<<<<< HEAD
=======

>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3
    render() {
        return `

        <div class="movie">
<<<<<<< HEAD
            <div class="movie-image">
                <span class="play"><span class="name">${this.props.title}</span></span>
                <a href="#"><img src="../../assets/images/${this.props.poster}" alt="" /></a> 
            </div>
            <div class="rating">
                <p>RATING</p>
                <div class="stars">
                    <div class="stars-in"> </div>
                </div>
                <span class="comments">${this.props.comments?.length ?? 0}</span>
            </div>
        </div>

        `
    }
}

customElements.define('it-moviecard', MovieCard);
=======
          <div class="movie-image"> <span class="play"><span class="name">${this.props.title}</span></span>
           <a href="#"><img src="../../${this.props.poster}" alt="" /></a>
        </div>
          <div class="rating">
            <p>RATING</p>
            <div class="stars">
              <div class="stars-in"> </div>
            </div>
            <span class="comments">${this.props.comments?.length ?? 0}</span> </div>
        </div>
        
        `

    }
}

customElements.define('it-moviecard', MovieCard)
>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3

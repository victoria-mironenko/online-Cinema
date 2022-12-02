import { Component } from "../../core";
import './moviecard.scss';

export class MovieCard extends Component {
    constructor() {
        super();
        this.props = {};
        this.state = {}; 
    }

    static get observedAttributes() {
        return ['title', 'poster', 'comments']
    }

    render() {
        return `

        <div class="movie">
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

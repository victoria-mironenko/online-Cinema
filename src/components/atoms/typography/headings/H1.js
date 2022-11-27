import { Component } from '../../../../core'

export class H1 extends Component {

    constructor() {
        super();
        this.isShadow = true;
    }


    render() {
        return `
        <div style="display: grid; grid-template-columns: 20% 20% 20% 20% 20%; 
        background-color: red; margin-top: 20px; gap: 20px; padding-left: 20px">
            <slot></slot>
        </div>
        `;
    }
}

customElements.define('it-h1', H1);
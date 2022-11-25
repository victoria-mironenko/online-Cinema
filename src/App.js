import { Component } from "./core";

export class App extends Component {

  render() {
    return (
      `<it-h1>
          <div>234</div>>
      </it-h1>`
    )
  }
}

customElements.define("my-app", App);

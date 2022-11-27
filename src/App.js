import { Component } from "./core";

export class App extends Component {

  render() {
    return (
      `<it-h1>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
          <div>I am exhausted</div>
      </it-h1>`
    )
  }
}

customElements.define("my-app", App);

import React, { Component } from 'react'

export default class Allertbutton extends Component {

    constructor(properties) {
        super(properties);
        this.sayHello = this.sayHello.bind(this);
      }
    

      sayHello() {
        alert('Hello!');
      }





  render() {
    return (
        <button onClick={this.sayHello}>
        Click me for an allert!
      </button>
    )
  }
}

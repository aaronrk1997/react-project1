import React, { Component } from 'react'

export default class Button extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
          count: 0,
        };
      }
      
      render(){
        return (
            <button onClick={() => this.setState({ count: 1})}>
      Click me!
    </button>
        );

      }
      
      
      
}

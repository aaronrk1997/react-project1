import React, { Component } from 'react'
import Title from './Title'
import Text from './Text'

export default class Textblock extends Component {
  render() {
    return (
      <div>
          <div>
          Textblock
        </div>
        <div>
            <Title />
            <Text />
        </div>
        </div>
    )
  }
}

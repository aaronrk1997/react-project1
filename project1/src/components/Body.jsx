import React, { Component } from 'react'
import Textblock from './Textblock'
import Button from './Button'
import Allertbutton from './Allertbutton'

export default class Body extends Component {
  render() {
    return (
      <div>
          <div>
              body
          </div>
          <div>
              <Textblock />
              <Button />
              <Allertbutton />
          </div>
      </div>
    )
  }
}

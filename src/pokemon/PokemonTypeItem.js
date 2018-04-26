import React, { Component } from 'react'
import { Label } from 'reactstrap'

class PokemonTypeItem extends Component {
  click (e) {
    this.props.changeType(e.target.value)
  }

  render () {
    return (
      <div>
        <Label>
          <input
            type='radio'
            onClick={this.click.bind(this)}
            value={this.props.name}
            name='type'
          />
          {' '}
          {this.props.name}
        </Label>{' '}
      </div>
    )
  }
}

export default PokemonTypeItem

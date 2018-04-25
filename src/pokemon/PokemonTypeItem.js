import React, { Component } from 'react'
import { Button } from 'reactstrap'

class PokemonTypeItem extends Component {
  click(e) {
    this.props.changeType(e.target.value)
  }

  render() {
    return (
      <Button onClick={this.click.bind(this)} value={this.props.name}>{this.props.name}</Button>
    )
  }
}

export default PokemonTypeItem
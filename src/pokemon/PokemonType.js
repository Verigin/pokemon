import React, { Component } from 'react'
import { Row } from 'reactstrap';
import PokemonTypeItem from './PokemonTypeItem'

class PokemonType extends Component {
  render () {
    return (
      <Row>  
      {this.props.type.map((item, index) =>
        <PokemonTypeItem key={index} changeType={this.props.changeType} name={item}/>
      )}
      </Row>
    )
  }
}

export default PokemonType
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import PokemonTypeItem from './PokemonTypeItem'

class PokemonType extends Component {
  render () {
    return (
      <Row>
        <Col>
          {this.props.type.map((item, index) => (
            <PokemonTypeItem
              key={index}
              changeType={this.props.changeType}
              name={item}
            />
          ))}
        </Col>
      </Row>
    )
  }
}

export default PokemonType

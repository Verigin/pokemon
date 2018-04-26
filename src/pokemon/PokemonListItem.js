import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from 'reactstrap'

class PokemonListItem extends Component {
  render () {
    let abilities = this.props.item.abilities
      .map(item => item.ability.name)
      .join(', ')
    let stats = this.props.item.stats.map(item => item.stat.name).join(', ')
    return (
      <Col lg='4'>
        <div>
          <Card>
            <CardImg
              top
              width='100%'
              src={this.props.item.sprites.back_default}
              alt='Card image cap'
            />
            <CardBody>
              <CardTitle>{this.props.item.name}</CardTitle>
              <CardSubtitle>
                Type: <b>{this.props.item.types[0].type.name}</b>
              </CardSubtitle>
              <CardText>
                {' '}
                Abilities: {abilities}
              </CardText>
              <CardText>
                {' '}
                Stats: {stats}
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </Col>
    )
  }
}

export default PokemonListItem

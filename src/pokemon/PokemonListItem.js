import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, Input } from 'reactstrap';

class PokemonListItem extends Component {
  render() {
    return (
      <Col xs="3">
         <Card>
           <CardImg top width="100%" src={this.props.item.sprites.back_default} alt="Card image cap" />
           <CardBody>
             <CardTitle>{this.props.item.name}</CardTitle>
             <CardSubtitle>type: {this.props.item.types[0].type.name}</CardSubtitle>
             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
             <Button>Button</Button>
           </CardBody>
         </Card>
        </Col>
    )
  }
}

export default PokemonListItem
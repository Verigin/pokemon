import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadPakemonList } from './common/api'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, Input } from 'reactstrap';

class PakemonList extends Component {
  constructor () {
    super()
    this.state = {list: []}
  }

componentWillMount() {
  console.log('componentWillMount')
  this.props.onGetPakemonList();
}

// function onChange() {

// }

  render () {
    return (
     
     
      <Container>
         <Input type="text" name="search" onChange={this.props.onChange} placeholder="search" />
        <Row>
      {this.props.list.map(item => 
        <Col xs="3">
         <Card>
           <CardImg top width="100%" src={item.sprites.back_default} alt="Card image cap" />
           <CardBody>
             <CardTitle>{item.name}</CardTitle>
             <CardSubtitle>Card subtitle</CardSubtitle>
             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
             <Button>Button</Button>
           </CardBody>
         </Card>
</Col>
      )} 
      </Row>
    </Container>

    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.pakemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetPakemonList: () => dispatch(loadPakemonList())
  }
}

const PakemonListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PakemonList);

export default PakemonListContainer;
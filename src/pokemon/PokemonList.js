import React, { Component } from 'react';
import { Row } from 'reactstrap';
import PokemonListItem from './PokemonListItem' 
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.css';

class PokemonList extends Component {

componentWillMount() {
  console.log('componentWillMount', this.props.itemsCount)
  this.props.onGetPakemonList(this.props.itemsCount);
}

componentWillReceiveProps(nextProps) {
  console.log('componentWillRecieveProps', nextProps.itemsCount)
  //this.props.onGetPakemonList(nextProps.itemsCount);
}

handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`);
  //this.setState({activePage: pageNumber});
  this.props.changeActivePage(pageNumber)
}

  render () {
    return (
      <Row>
        {this.props.list.map((item, index) =>
          <PokemonListItem key={index} item={item} /> 
        )}
        <Pagination
          activePage={this.props.activePage}
          itemsCountPerPage={this.props.itemsCountPerPage}
          totalItemsCount={this.props.totalItemsCount}
          pageRangeDisplayed={100}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-link"
          activeClass="active"
        />
      </Row>
      
    )
  }
}

export default PokemonList
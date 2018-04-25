import React, { Component } from 'react';
import PokemonListContainer from './PokemonListContainer'
import PokemonTypeContainer from './PokemonTypeContainer'
import { Container, Input } from 'reactstrap';


class Pokemon extends Component {
  constructor () {
    super()
    this.state = {
      searchName: '', 
      searchType: '',
      activePage: 1,
      itemsCountPerPage: 4,
      itemsCount: 8
    }
  }

  onChangeType(type) {
    if (this.state.searchType !== type) {
      this.setState({searchType: type})
    }
    else this.setState({searchType: ''})
  }

  onChangeName(e) {
    this.setState({searchName: e.target.value})
  }

  onChangeActivePage(current) {
    this.setState({activePage: current})
  }

  onChangeItemsCountPerPage(e) {
    this.setState({itemsCountPerPage: e.target.value})
  }

  onChangeItemsCount(e) {
    this.setState({itemsCount: e.target.value})
    console.log('onChangeItemsCount')
  }

  render() {
    return (
    <Container>
      <Input type="text" name="search" value={this.state.searchName} onChange={this.onChangeName.bind(this)} placeholder="search" />
      <Input onChange={this.onChangeItemsCountPerPage.bind(this)} type="select" name="itemsCountPerPage">
            <option>4</option>
            <option>8</option>
            <option>12</option>
            <option>16</option>
          </Input>
      <Input onChange={this.onChangeItemsCount.bind(this)} type="select" name="itemsCount">
            <option>4</option>
            <option>8</option>
            <option>16</option>
            <option>32</option>
          </Input>    
      <PokemonTypeContainer changeType={this.onChangeType.bind(this)}/>
      <PokemonListContainer 
        searchName={this.state.searchName}  
        searchType={this.state.searchType}
        activePage={this.state.activePage} 
        changeActivePage={this.onChangeActivePage.bind(this)}
        itemsCountPerPage={this.state.itemsCountPerPage}
        itemsCount={this.state.itemsCount}
        />
    </Container>
    )
  }
}

export default Pokemon
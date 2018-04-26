import React, { Component } from 'react'
import PokemonListContainer from './PokemonListContainer'
import PokemonTypeContainer from './PokemonTypeContainer'
import { Container, Input, Col, Row, Form, FormGroup, Label } from 'reactstrap'

class Pokemon extends Component {
  constructor () {
    super()
    this.state = {
      searchName: '',
      searchType: '',
      activePage: 1,
      itemsCountPerPage: 3,
      itemsCount: 9
    }
  }

  onChangeType (type) {
    if (this.state.searchType !== type) {
      this.setState({ searchType: type })
    } else this.setState({ searchType: '' })
    this.setState({ activePage: 1 })
  }

  onChangeName (e) {
    this.setState({ searchName: e.target.value })
    this.setState({ activePage: 1 })
  }

  onChangeActivePage (current) {
    this.setState({ activePage: current })
  }

  onChangeItemsCountPerPage (e) {
    this.setState({ itemsCountPerPage: e.target.value })
    this.setState({ activePage: 1 })
  }

  onChangeItemsCount (e) {
    this.setState({ itemsCount: e.target.value })
    this.setState({ activePage: 1 })
  }

  render () {
    return (
      <Container>
        <Row>
          <Col lg='4' md='4' sm='1'>
            <Form>
              <FormGroup>
                <Label>Search by name</Label>
                <Input
                  type='text'
                  name='search'
                  value={this.state.searchName}
                  onChange={this.onChangeName.bind(this)}
                  placeholder='input name'
                />
              </FormGroup>
              <FormGroup>
                <Label>Items count per page</Label>
                <Input
                  onChange={this.onChangeItemsCountPerPage.bind(this)}
                  type='select'
                  name='itemsCountPerPage'
                >
                  <option>3</option>
                  <option>9</option>
                  <option>18</option>
                  <option>36</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Items count</Label>
                <Input
                  defaultValue='9'
                  onChange={this.onChangeItemsCount.bind(this)}
                  type='select'
                  name='itemsCount'
                >
                  <option>3</option>
                  <option>9</option>
                  <option>18</option>
                  <option>36</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Types</Label>{' '}
                <Label>

                  <input
                    type='radio'
                    onClick={() => this.onChangeType('')}
                    name='type'
                    checked={this.state.searchType === '' && 'checked'}
                  />
                  {' '}
                  All
                </Label>
                <PokemonTypeContainer
                  changeType={this.onChangeType.bind(this)}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col lg='8' md='8' sm='1'>
            <PokemonListContainer
              searchName={this.state.searchName}
              searchType={this.state.searchType}
              activePage={this.state.activePage}
              changeActivePage={this.onChangeActivePage.bind(this)}
              itemsCountPerPage={this.state.itemsCountPerPage}
              itemsCount={this.state.itemsCount}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Pokemon

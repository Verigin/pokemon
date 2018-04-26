import React, { Component } from 'react'
import { Row, Label, Progress, FormGroup, Col } from 'reactstrap'
import PokemonListItem from './PokemonListItem'
import Pagination from 'react-js-pagination'
import 'bootstrap/dist/css/bootstrap.css'

class PokemonList extends Component {
  componentWillMount () {
    this.props.onGetPakemonList(this.props.itemsCount)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.itemsCount !== this.props.itemsCount) {
      this.props.onGetPakemonList(nextProps.itemsCount)
    }
  }

  handlePageChange (pageNumber) {
    this.props.changeActivePage(pageNumber)
  }

  render () {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <FormGroup>
                <Label>{this.props.status}</Label>
                <Progress
                  value={
                    this.props.currentItemsCount / this.props.itemsCount * 100
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            {this.props.list.map((item, index) => (
              <PokemonListItem key={index} item={item} />
            ))}
          </Row>
          {this.props.totalItemsCount > this.props.itemsCountPerPage &&
            <div>
              <Row>
                <hr />
              </Row>
              <Row>
                <Col>
                  <Pagination
                    activePage={this.props.activePage}
                    itemsCountPerPage={this.props.itemsCountPerPage}
                    totalItemsCount={this.props.totalItemsCount}
                    pageRangeDisplayed={100}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass='page-link'
                    activeClass='active'
                  />
                </Col>
              </Row>
            </div>}
        </Col>
      </Row>
    )
  }
}

export default PokemonList

import { connect } from 'react-redux'
import PokemonList from './PokemonList'
import { loadPakemonList } from '../common/api'
import { getPokemonsFilteredByNameAndType } from '../redux/selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    list: getPokemonsFilteredByNameAndType(
      state,
      ownProps.searchName,
      ownProps.searchType,
      ownProps.activePage,
      ownProps.itemsCountPerPage
    ),
    totalItemsCount: getPokemonsFilteredByNameAndType(
      state,
      ownProps.searchName,
      ownProps.searchType
    ).length,
    activePage: ownProps.activePage,
    changeActivePage: ownProps.changeActivePage,
    itemsCountPerPage: ownProps.itemsCountPerPage,
    itemsCount: ownProps.itemsCount,
    currentItemsCount: state.pokemons.length,
    status: state.status
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetPakemonList: count => {
      dispatch(loadPakemonList(count))
    }
  }
}

const PokemonListContainer = connect(mapStateToProps, mapDispatchToProps)(
  PokemonList
)

export default PokemonListContainer

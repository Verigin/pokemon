import { connect } from 'react-redux'
import PokemonType from './PokemonType'
import { getPokemonTypes } from '../redux/selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    type: getPokemonTypes(state),
    changeType: ownProps.changeType
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const PokemonTypeContainer = connect(mapStateToProps, mapDispatchToProps)(
  PokemonType
)

export default PokemonTypeContainer

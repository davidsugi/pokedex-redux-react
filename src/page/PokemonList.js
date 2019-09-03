import { connect } from 'react-redux'
import PokeAdapter from '../components/PokeAdapter'
import { getPokemon } from '../actions/pokemons'
import { push } from 'connected-react-router'


const mapStateToProps = state => ({
  pokemon: state.pokemon.data,
  isLoading: state.pokemon.isLoading,
})

const mapDispatchToProps = {
  getPokemon,
  push,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeAdapter)
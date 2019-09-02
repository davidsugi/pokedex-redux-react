import { connect } from 'react-redux'
import PokeAdapter from '../components/PokeAdapter'
import { getPokemon } from '../actions/pokemons'


const mapStateToProps = state => ({
  pokemon: state.pokemon.data,
  isLoading: state.pokemon.isLoading,
})

const mapDispatchToProps = {
  getPokemon
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeAdapter)
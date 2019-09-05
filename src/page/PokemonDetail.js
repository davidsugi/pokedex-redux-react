import { compose } from 'redux'
import { connect } from 'react-redux'
import PokeView from '../components/PokeView'
import { showPokemon } from '../actions/pokemons'
import { throwPokeBall,renamePoke } from '../actions'
import { goBack ,push } from 'connected-react-router'

import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  pokemon: state.detail_pokemon.data,
  currentPokemon: state.my_pokemon.counter-1,
  router: state.router,
  isLoading: state.detail_pokemon.isLoading,
})

const mapDispatchToProps = {
  showPokemon,
  throwPokeBall,
  push,
  goBack,
  renamePoke
}

export default compose(
  withRouter,
  connect(
  mapStateToProps,
  mapDispatchToProps
))(PokeView)


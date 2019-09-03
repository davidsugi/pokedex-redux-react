import { compose } from 'redux'
import { connect } from 'react-redux'
import PokeView from '../components/PokeView'
import { showPokemon } from '../actions/pokemons'
import { throwPokeBall } from '../actions'
import { goBack } from 'connected-react-router'

import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  pokemon: state.detail_pokemon.data,
  router: state.router,
  isLoading: state.detail_pokemon.isLoading,
})

const mapDispatchToProps = {
  showPokemon,
  throwPokeBall,
  goBack
}

export default compose(
  withRouter,
  connect(
  mapStateToProps,
  mapDispatchToProps
))(PokeView)


import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { compose } from 'redux';
import { renamePoke, throwPokeBall } from '../actions';
import { showPokemon } from '../actions/pokemons';
import PokeView from '../components/PokeView';


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
  renamePoke
}

export default compose(
  withRouter,
  connect(
  mapStateToProps,
  mapDispatchToProps
))(PokeView)


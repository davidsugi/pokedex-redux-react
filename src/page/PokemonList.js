import { connect } from 'react-redux'
import PokeAdapter from '../components/PokeAdapter'
import { getPokemon,search } from '../actions/pokemons'
import { push } from 'connected-react-router';
import { clearQueryPush } from '../actions'
import _ from 'lodash';

const getDisplayedData = (pokemon, query) => {
    if(query!=="")
      return _.pick(pokemon, Object.keys(pokemon).filter( t => pokemon[t].name.toLowerCase().includes(query.toLowerCase())) ) ;
    return pokemon;
}


const mapStateToProps = state => ({
  pokemon: getDisplayedData(state.pokemon.data,state.pokemon.query),
  my_pokemon: state.my_pokemon.summary,
  isLoading: state.pokemon.isLoading,
  currentPage: state.pokemon.page,
})

const mapDispatchToProps = {
  getPokemon,
  push: clearQueryPush,
  search,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeAdapter)
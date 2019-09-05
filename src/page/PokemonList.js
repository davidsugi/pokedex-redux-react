import _ from 'lodash';
import { connect } from 'react-redux';
import { clearQueryPush } from '../actions';
import { getPokemon, search } from '../actions/pokemons';
import PokeAdapter from '../components/PokeAdapter';

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
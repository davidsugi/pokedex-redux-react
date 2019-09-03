import React, { Component } from 'react';
import PokeList from './PokeList'
import no_img from '../assets/pokeball.svg';

class PokeAdapter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  render() {
    var { pokemon,goBack} = this.props;

    pokemon = pokemon[this.props.match.params.id];

    var img = pokemon.sprites ? pokemon.sprites.front_default ? pokemon.sprites.front_default : no_img : no_img
    return (
        <div>
            <button onClick={goBack}>back!</button>
            <img src={img} width={100} alt={pokemon.name} onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }} />
            {pokemon.name}
        </div>
    );
  }
}




export default PokeAdapter
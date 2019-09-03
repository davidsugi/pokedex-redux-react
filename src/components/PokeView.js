import React, { Component } from 'react';
import PokeList from './PokeList'
import no_img from '../assets/pokeball.svg';

class PokeAdapter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };
    this.onCatch=this.onCatch.bind(this)
  };
  
  componentDidMount() {
    this.props.showPokemon(this.props.match.params.id);
  }


  onCatch(){
    if(this.props.throwPokeBall(this.props.pokemon))
        alert("SUCCESS!")
    else
    alert("TRY AGAIN")
  }
  
  render() {
    var { pokemon ,isLoading,goBack} = this.props;

    if(isLoading){
      return (<p>loading.......</p>)
    }
    var img = pokemon.sprites ? pokemon.sprites.front_default ? pokemon.sprites.front_default : no_img : no_img
    return (
        <div>
            <button onClick={goBack}>back!</button>
            <img src={img} width={100} alt={pokemon.name} onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }} />
            {pokemon.name}
            <button onClick={this.onCatch}>Catch!</button>
        </div>
    );
  }
}




export default PokeAdapter
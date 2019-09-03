import React, { Component } from 'react';
import MyPokeList from './MyPokeList'

class PokeAdapter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  render() {
    var { pokemon } = this.props;

    return (
      <ul>
        <button onClick={()=> this.props.push('/')}>Pokedex</button>
        { Object.keys(pokemon).map(id => (
          <MyPokeList key={id} {...pokemon[id]} onClick={()=> this.props.push('/my_poke/'+id)} />
        )) }
      </ul>
    );
  }
}




export default PokeAdapter
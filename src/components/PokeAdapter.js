import React, { Component } from 'react';
import PokeList from './PokeList'


class PokeAdapter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  componentDidMount() {
    this.props.getPokemon();
  }


  render() {
    var { pokemon ,isLoading } = this.props;

    if(isLoading){
      return (<p>loading.......</p>)
    }
    
    return (
      <ul>
        { Object.keys(pokemon).map(id => (
          <PokeList key={id} {...pokemon[id]} />
        )) } 
      </ul>
    );
  }
}




export default PokeAdapter
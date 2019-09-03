import React, { Component } from 'react';
import PokeList from './PokeList'
import Footer from '../page/Footer';
import Header from '../page/Header';
import '../style/App.scss';
import '../style/App.scss';

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
    var { pokemon ,isLoading, my_pokemon } = this.props;
    
    return (
      < div className = "container" >
         <Header />
        <div className="content">
        
          {
            isLoading ?
              <p>loading.......</p>
           : 
           <ul className="ul-poke">
           {Object.keys(pokemon).map(id => (
            <PokeList key={id} {...pokemon[id]} owned={my_pokemon[id]} onClick={()=> this.props.push('/'+id)} />
          )) 
        }      
          </ul>
          } 
        </div>
      <Footer />
        
      </div>
    );
  }
}




export default PokeAdapter
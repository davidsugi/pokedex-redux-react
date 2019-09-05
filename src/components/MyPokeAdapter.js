import React, { Component } from 'react';
import MyPokeList from './MyPokeList'
import Header from '../page/Header';
import Footer from '../page/Footer';
import '../style/App.scss';
import '../style/App.scss';

export default class MyPokeAdapter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  render() {
    var { pokemon } = this.props;

    return (
       <div className = "container" >
         <Header title="My Pokemon" />
        <div className="content">
          <ul className="ul-poke">
            { Object.keys(pokemon).map(id => (
              <MyPokeList key={id} {...pokemon[id]} onClick={()=> this.props.push('/my_poke/'+id)} release={()=>this.props.releasePoke(id)} />
            )) }
          </ul>
        </div>
      <Footer />
        
      </div>

      
    );
  }
}

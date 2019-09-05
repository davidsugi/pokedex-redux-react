import React, { Component } from 'react';
import MyPokeList from './MyPokeList'
import Header from '../page/Header';
import Footer from '../page/Footer';
import '../style/App.scss';
import '../style/App.scss';
import Swal from 'sweetalert2'

export default class MyPokeAdapter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  release(id) {
    var pokemon = this.props.pokemon[id];
    var name = pokemon.re_name ? pokemon.re_name : pokemon.name;
    Swal.fire({
      title: 'Are You Sure?',
      text: 'Release ' + name + '?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      focusCancel: true,
      confirmButtonText: 'Yes, Release ' + name,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.props.releasePoke(id);
      }
    })
  }
  
  render() {
    var { pokemon } = this.props;

    return (
       <div className = "container" >
         <Header title="My Pokemon" />
        <div className="content">
          <ul className="ul-poke">
            { Object.keys(pokemon).map(id => (
              <MyPokeList key={id} {...pokemon[id]} onClick={()=> this.props.push('/my_poke/'+id)} release={()=>this.release(id)} />
            )) }
          </ul>
        </div>
      <Footer />
        
      </div>

      
    );
  }
}

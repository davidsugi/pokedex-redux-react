import React, { Component,Suspense } from 'react';
// import PokeList from './PokeList'
import Footer from '../page/Footer';
import Header from '../page/Header';
import PokeLoad from './PokeList';
import '../style/App.scss';
import {_renderLoader} from '../helper'

import {item_limit} from '../constants';
import {Waypoint} from 'react-waypoint';

const PokeList = React.lazy(() => import('./PokeList'));

class PokeAdapter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentShownItem:0,
    };
    this._loadMoreItems = this._loadMoreItems.bind(this)
    this._renderWaypoint = this._renderWaypoint.bind(this)
  };
  
  _loadMoreItems() {
        this.setState({ currentShownItem: this.state.currentShownItem +1})
  }

  _renderWaypoint() {
    if (!this.props.isLoading) {
      return (
        <Waypoint
        key="waypo"
        threshold={2.0}
        onEnter={this._loadMoreItems}
        >
        
          {this.state.currentShownItem > 1 && (this.props.pokemon.length > this.state.currentShownItem*item_limit) ? <p>Load More</p> : null}
        </Waypoint>
      );
    }
    else{
      return _renderLoader(120,PokeLoad)
    }
  }

  componentDidMount() {
    this.props.getPokemon(this.props.currentPage);
  }


  render() {
    var { pokemon , my_pokemon,search } = this.props;
    
    return (
      <div className = "container">
        <Header search={search} />
        <div className="content">
          <ul className="ul-poke">
           { 
             Object.keys(pokemon).slice(0,this.state.currentShownItem*item_limit).map(id => (
              <Suspense key={id}  fallback={<PokeLoad isLoading/>}>
                <PokeList  {...pokemon[id]}  owned={my_pokemon[id]} onClick={()=> { this.props.push('/'+id)} } />
              </Suspense>
              )) 
            }      
          {this._renderWaypoint()}
          </ul>
        </div>
      <Footer />
        
      </div>
    );
  }
}




export default PokeAdapter
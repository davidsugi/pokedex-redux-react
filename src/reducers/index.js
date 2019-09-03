import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import pokemon from './pokemon'
import detail_pokemon from './detail_pokemon'
import my_pokemon from './my_pokemon'

export default (history) => combineReducers({
  router: connectRouter(history),
  pokemon,
  detail_pokemon,
  my_pokemon
})
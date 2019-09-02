import { URL } from '../constants'
import { RSAA } from 'redux-api-middleware'

export const LOAD_POKE={
  REQUEST: 'LOAD_POKE',
  SUCCESS: 'LOAD_POKE_SUCCESS',
  FAIL: 'LOAD_POKE_FAIL',
}


export const getPokemon = (options = {}) => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: URL+'pokemon?limit=964',
      method: 'GET',
      types: [
        LOAD_POKE.REQUEST,
        LOAD_POKE.SUCCESS,
        LOAD_POKE.FAIL
      ]
    }
  })
}

import { RSAA } from 'redux-api-middleware';
import { URL } from '../constants';

export const LOAD_POKE={
  REQUEST: 'LOAD_POKE',
  SUCCESS: 'LOAD_POKE_SUCCESS',
  FAIL: 'LOAD_POKE_FAIL',
}

export const SEARCH_POKEMON = 'SEARCH_POKEMON'

export const LOAD_DETAIL={
  REQUEST: 'LOAD_DETAIL',
  SUCCESS: 'LOAD_DETAIL_SUCCESS',
  FAIL: 'LOAD_DETAIL_FAIL',
}


export const getPokemon = (page) => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: URL+`pokemon?limit=964`,
      method: 'GET',
      types: [
        LOAD_POKE.REQUEST,
        LOAD_POKE.SUCCESS,
        LOAD_POKE.FAIL
      ]
    }
  })
}


export function search(query) {
  return {
    type: SEARCH_POKEMON,
    query
  }
}




export const showPokemon = (id) => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: URL + `pokemon/${id}`,
      method: 'GET',
      types: [
        LOAD_DETAIL.REQUEST,
        LOAD_DETAIL.SUCCESS,
        LOAD_DETAIL.FAIL
      ]
    }
  })
}

import { URL } from '../constants'
import { RSAA } from 'redux-api-middleware'

export const LOAD_POKE={
  REQUEST: 'LOAD_POKE',
  SUCCESS: 'LOAD_POKE_SUCCESS',
  FAIL: 'LOAD_POKE_FAIL',
}

export const LOAD_DETAIL={
  REQUEST: 'LOAD_DETAIL',
  SUCCESS: 'LOAD_DETAIL_SUCCESS',
  FAIL: 'LOAD_DETAIL_FAIL',
}


export const getPokemon = () => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: URL+'pokemon?limit=34',
      method: 'GET',
      types: [
        LOAD_POKE.REQUEST,
        LOAD_POKE.SUCCESS,
        LOAD_POKE.FAIL
      ]
    }
  })
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

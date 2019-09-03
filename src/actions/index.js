
import { URL } from '../constants'
import { RSAA } from 'redux-api-middleware'

let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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

export const MY_POKE = {
    CATCH: 'CATCH_POKE',
    RELEASE: 'RELEASE_POKE',
    RENAME: 'RENAME_POKE',
}

export const getPokemon = () => dispatch => {
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

function catchPoke(poke) {
  return {
    type: MY_POKE.CATCH,
    poke
  }
}


export function throwPokeBall(poke) {
  return (dispatch) => {
     let catch_pokemon=Math.floor(Math.random() * 2);
     console.log(catch_pokemon);
     
      if (catch_pokemon === 0) {
          return false;
      }

      dispatch(catchPoke(poke));
        return true;
  };
}


export function renamePoke(poke,name) {
  return {
    type: MY_POKE.CATCH,
    poke,
    name
  }
}

export function releasePoke(id) {
  return {
    type: MY_POKE.RELEASE,
    id
  }
}
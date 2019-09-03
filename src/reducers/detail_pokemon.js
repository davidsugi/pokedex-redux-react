import {  LOAD_DETAIL } from '../actions/pokemons'

const initState = {data:[], isLoading: false}


export default function (state = initState, action) {
    switch (action.type) {
    case LOAD_DETAIL.REQUEST:
      return {...state, isLoading:true}
    case LOAD_DETAIL.FAIL:
      return {...state, isLoading:false, error: action.payload.error,}
    case LOAD_DETAIL.SUCCESS:
        return {
            ...state,
            data: action.payload,
            isLoading: false
            }
    default:
      return state
  }
}

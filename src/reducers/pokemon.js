import {  LOAD_POKE,SEARCH_POKEMON } from '../actions/pokemons'

const initState = {data:[], isLoading: false,page:0, query:'', currentShown:0}


export default function (state = initState, action) {
    switch (action.type) {
    case LOAD_POKE.REQUEST:
      return {...state, isLoading:true}
    case LOAD_POKE.FAIL:
      return {...state, isLoading:false, error: action.payload.error,}
      
    case LOAD_POKE.SUCCESS:
        return {
            ...state,
            data: {
                    ...state.data,
                    ...action.payload.results.reduce((accumulator, item) => {
                        const { url } = item
                        const id = url.substring(34, url.length - 1)
                        return {
                            ...accumulator,
                            [id]: { id,
                                ...item
                            }
                        }
                    }, {})
                },
                isLoading: false,
                currentShown: 0,
                page: action.payload.next === null ? null : state.page + 1
            }
      case SEARCH_POKEMON:
        return {...state, query: action.query, currentShown:0}
    default:
      return state
  }
}

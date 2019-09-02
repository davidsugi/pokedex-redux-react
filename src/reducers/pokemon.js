import {  LOAD_POKE } from '../actions/pokemons'

const initState = {data:[], isLoading: false}


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
                isLoading: false
            }
    default:
      return state
  }
}

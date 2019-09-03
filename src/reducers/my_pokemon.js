import {  MY_POKE } from '../actions'

const initState = {data:[]}


export default function (state = initState, action) {
    switch (action.type) {
    case MY_POKE.CATCH:
      return {...state, 
        data:{
            ...state.data,
            [action.poke.id]: action.poke,
        }
    }
    case MY_POKE.RELEASE:
      return {...state, isLoading:false, error: action.payload.error,}
    case MY_POKE.RENAME:
         return {...state, 
            data:{
                ...state.data,
                [action.payload.id]: {
                    ...state.data.action.payload.id,
                    re_name: action.payload.name
                }
            }
        }
    default:
      return state
  }
}

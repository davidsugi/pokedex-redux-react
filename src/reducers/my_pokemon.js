import {  MY_POKE } from '../actions'

const initState = {data:[],counter:0,summary:[]}


export default function (state = initState, action) {
    switch (action.type) {
    case MY_POKE.CATCH:
      return {...state, 
        data:{
            ...state.data,
            [state.counter]: action.poke,
        },
        counter: state.counter+1,
        summary:{
            ...state.summary,
            [action.poke.id]: state.summary[action.poke.id] ? state.summary[action.poke.id]+1 : 1,
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
            },
        }
    default:
      return state
  }
}

import { URL } from '../constants'
import { RSAA } from 'redux-api-middleware'

export const MY_POKE={
  CATCH: 'CATCH_POKE',
  RELEASE: 'RELEASE_POKE',
  RENAME: 'RENAME_POKE',
}
export function catchPoke(poke) {
  return {
    type: MY_POKE.CATCH,
    poke
  }
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
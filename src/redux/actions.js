import { GET_PAKEMON_LIST, ADD_PAKEMON_TO_STATE } from './constants'

export function getPakemonList(list) {
  return {
    type: GET_PAKEMON_LIST,
    list: list
  }
}

export function addPakemonToState(pakemon) {
  return {
    type: ADD_PAKEMON_TO_STATE,
    pakemon: pakemon
  }
}
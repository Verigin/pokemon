import {
  GET_PAKEMON_LIST,
  ADD_PAKEMON_TO_STATE,
  CLEAR_STATE,
  CONNETCTING_TO_API
} from './constants'

export function addPakemonToState (pakemon) {
  return {
    type: ADD_PAKEMON_TO_STATE,
    pakemon: pakemon
  }
}

export function clearState () {
  return {
    type: CLEAR_STATE,
    status: 'Clear state ...'
  }
}

export function connectingToApi () {
  return {
    type: CONNETCTING_TO_API,
    status: 'Connection to api ...'
  }
}

export function getPakemonList () {
  return {
    type: GET_PAKEMON_LIST,
    status: 'Progress loading ...'
  }
}

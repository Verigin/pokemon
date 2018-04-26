import {
  GET_PAKEMON_LIST,
  ADD_PAKEMON_TO_STATE,
  CLEAR_STATE,
  CONNETCTING_TO_API,
  WARNING_API,
  ERROR_API
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
    status: 'Connection to api ... => https://pokeapi.co/api/v2/pokemon/'
  }
}

export function getPakemonList () {
  return {
    type: GET_PAKEMON_LIST,
    status: 'Progress loading ...'
  }
}

export function warningApi (warning = 'warning API') {
  return {
    type: WARNING_API,
    status: 'API WORNING ' + warning + ' RELOAD PAGE!'
  }
}

export function errorApi (error = 'error API') {
  return {
    type: ERROR_API,
    status: 'API ERROR ' + error + ' RELOAD PAGE!'
  }
}

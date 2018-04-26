import { combineReducers } from 'redux'
import {
  GET_PAKEMON_LIST,
  ADD_PAKEMON_TO_STATE,
  CLEAR_STATE,
  CONNETCTING_TO_API
} from './constants'

const appReducer = combineReducers({
  pokemons,
  status
})

function status (state = '', action) {
  switch (action.type) {
    case CLEAR_STATE: {
      state = action.status
      break
    }
    case CONNETCTING_TO_API: {
      state = action.status
      break
    }
    case GET_PAKEMON_LIST: {
      state = action.status
      break
    }
  }
  return state
}

function pokemons (state = [], action) {
  switch (action.type) {
    case CLEAR_STATE: {
      state = []
      break
    }
    case ADD_PAKEMON_TO_STATE: {
      // console.log("add pakemon from reducer", action.pakemon)
      state = state.slice()
      state.push(action.pakemon)
      break
    }
  }
  return state
}

export default function rootReducer (state, action) {
  return appReducer(state, action)
}

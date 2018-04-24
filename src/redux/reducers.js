import { combineReducers } from 'redux'
import { GET_PAKEMON_LIST, ADD_PAKEMON_TO_STATE } from './constants'

const appReducer = combineReducers({
  pakemons
})

function pakemons(state = [], action) {

  switch (action.type) {
    case GET_PAKEMON_LIST: {
      console.log("pakemons", action.list)
      //state = state.slice()
      //state = action.list
      break;
    }
    case ADD_PAKEMON_TO_STATE: {
      console.log("add pakemon from reducer", action.pakemon)
      state = state.slice()
      state.push(action.pakemon)
      break;
    }
  }
  return state;
}

export default function rootReducer (state, action) {
  return appReducer(state, action)
}


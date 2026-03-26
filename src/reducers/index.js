import { createStore } from 'redux'

const initialState = {
  user: null,
  session: null,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_SESSION':
      return { ...state, session: action.payload }
    case 'LOGOUT':
      return { ...state, user: null, session: null }
    default:
      return state
  }
}

export const store = createStore(rootReducer)

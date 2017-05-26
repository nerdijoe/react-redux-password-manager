import {
  FETCH_DATA,
  INCREMENT_LAST_ID,
  ADD_PASSWORD
} from '../actions/constants'

const initialState = {
  data: [],
  last_id: 0
}

const passwordReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA: {
      return { ...state, data: action.data }
    }
    case INCREMENT_LAST_ID: {
      return { ...state, last_id: state.last_id + 1 }
    }
    case ADD_PASSWORD: {
      return { ...state, data: [...state.data, action.new_item ] }
    }
    default: return state
  }
}

export default passwordReducer

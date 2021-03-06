import {
  FETCH_DATA,
  INCREMENT_LAST_ID,
  ADD_PASSWORD,
  SEARCH,
  DELETE,
  GET_BY_ID,
  EDIT
} from '../actions/constants'

const initialState = {
  data: [],
  last_id: 0,
  search_result: [],
  selected_data: {}
}

const passwordReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA: {
      return { ...state, data: action.data, search_result: action.data }
    }
    case INCREMENT_LAST_ID: {
      return { ...state, last_id: state.last_id + 1 }
    }
    case ADD_PASSWORD: {
      return { ...state, data: [...state.data, action.new_item ], search_result: [...state.data, action.new_item ] }
    }
    case SEARCH: {
      let text = action.text.toLowerCase()
      const result = state.data.filter( d => {
        let checkUrl = d.url.toLowerCase().indexOf(text)
        let checkUsername = d.username.toLowerCase().indexOf(text)
        let checkPassword = d.password.toLowerCase().indexOf(text)
        console.log(`${checkUrl}, ${checkUsername}, ${checkPassword}`)
        return (checkUrl > -1) || (checkUsername > -1 ) || (checkPassword > -1)
      })
      console.log('SEARCH', result)
      return { ...state, search_result: result }
    }
    case DELETE: {
      let updatedData = [...state.data]
      let pos = updatedData.findIndex( d => d.id === action.id )
      if( pos !== -1 )
        updatedData.splice(pos,1)

      return {...state, data: updatedData, search_result: updatedData}
    }
    case GET_BY_ID: {
      let pos = state.data.findIndex ( d=> d.id === action.id )
      let found_data = null
      if( pos !== -1 )
        found_data = {...state.data[pos]}
      return {...state, selected_data: found_data}
    }
    case EDIT: {
      let updatedData = [...state.data]
      let pos = updatedData.findIndex( d => d.id === action.edit_item.id )
      if( pos !== -1 )
        updatedData.splice(pos, 1, action.edit_item)
      return {...state, data: updatedData, search_result: updatedData }
    }
    default: return state
  }
}

export default passwordReducer

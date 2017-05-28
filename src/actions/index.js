import uuid from 'uuid'

import {
  FETCH_DATA,
  INCREMENT_LAST_ID,
  ADD_PASSWORD,
  SEARCH,
  DELETE
} from './constants'

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
}

export const actionFetchData = () => {
  return(dispatch) => {
    fetch('http://localhost:5000/data')
    .then( res => res.json() )
    .then (res => {
      console.log('actionFetchData')
      console.log(res)
      dispatch(fetchData(res))
    })
  }
}

export const incrementLastId = () => {
  return {
    type: INCREMENT_LAST_ID
  }
}

export const addPassword = (new_item) => {
  return {
    type: ADD_PASSWORD,
    new_item
  }
}

export const actionAddPassword = (form) => {
  console.log("Date.now", Date.now())
  return (dispatch) => {
    fetch('http://localhost:5000/data', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: uuid(),
        url: form.url,
        username: form.username,
        password: form.password,
        created_at: new Date()
      })
    })
    .then( res => res.json() )
    .then( res => {
      console.log('actionAddPassword')
      console.log(res)
      dispatch(addPassword(res))
      // increment last id

    })
  }
}

export const search = (text) => {
  return {
    type: SEARCH,
    text
  }
}

export const deletePassword = (id) => {
  return {
    type: DELETE,
    id
  }
}

export const actionDeletePassword = (id) => {

  return (dispatch) => {
    fetch(`http://localhost:5000/data/${id}`, {
      method: 'delete'
    })
    .then( res => res.json() )
    .then( res => {
      console.log('actionDeletePassword');
      console.log(res)
      dispatch(deletePassword(id))
    })
  }

}

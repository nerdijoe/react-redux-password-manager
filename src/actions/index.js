import {
  FETCH_DATA,
  INCREMENT_LAST_ID
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

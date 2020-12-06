import { BASE_URL } from '../utils/baseURL.utils'
import { USERNAME } from '../utils/username.utils'

export function fetchGroups() {
  return dispatch => {
    dispatch({type: 'LOADING_GROUPS'})
    fetch(`${BASE_URL}/${USERNAME}/groups`)
      .then(res => res.json())
      .then(json => console.log(json))
      // .then(json => dispatch({type: 'SET_GROUPS', payload: json}))
  }
}
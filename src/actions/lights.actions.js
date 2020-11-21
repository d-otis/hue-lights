import { BASE_URL } from '../utils/baseURL.utils'
import { USERNAME } from '../utils/username.utils'

export function fetchLights() {
  return dispatch => {
    dispatch({type: 'LOADING_LIGHTS'})
    fetch(`${BASE_URL}/${USERNAME}/lights`)
      .then(res => res.json())
      .then(json => dispatch({type: 'SET_LIGHTS', payload: json}))
  }
}
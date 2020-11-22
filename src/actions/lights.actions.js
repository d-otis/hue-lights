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

export function toggleLight(id, isOn) {
  return dispatch => {
    fetch(`${BASE_URL}/${USERNAME}/lights/${id}/state`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"on": isOn})
    })
      .then(res => res.json())
      .then(json => dispatch({type: 'TOGGLE_LIGHT', payload: json}))
  }
}

export function updateBrightness(id, brightness) {
  return dispatch => {
    fetch(`${BASE_URL}/${USERNAME}/lights/${id}/state`)
  }
}
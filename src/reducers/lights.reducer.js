const INITIAL_STATE = {}

const lightsReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'LOADING_LIGHTS':
      console.log('lights are loading')
      return state
    case "SET_LIGHTS":
      return {
        ...state,
        ...action.payload
      }
    case 'TOGGLE_LIGHT':
      let response = action.payload[0].success
      let returnedStatus = Object.values(response)[0]
      let lightId = Object.keys(response)[0].split('/')[2]
      
      return {
        ...state,
        ...state[lightId].state.on = returnedStatus
      }
    default: 
      return state
  }
}

export default lightsReducer
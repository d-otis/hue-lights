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
    default: 
      return state
  }
}

export default lightsReducer
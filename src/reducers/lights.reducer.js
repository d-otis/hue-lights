const INITIAL_STATE = []

const lightsReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case "SET_LIGHTS":
      debugger
      return state
    default: 
      return state
  }
}

export default lightsReducer
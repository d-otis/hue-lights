const INITIAL_STATE = {}

const groupsReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'LOADING_GROUPS':
      console.log('loading groups')
      return state
      
    case 'SET_GROUPS':
      debugger
      return state

    default:
      return state
  }
}

export default groupsReducer
const INITIAL_STATE = {}

const groupsReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'LOADING_GROUPS':
      console.log('loading groups')
      return state

    case 'SET_GROUPS':
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

export default groupsReducer
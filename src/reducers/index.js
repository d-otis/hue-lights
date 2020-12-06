import { combineReducers } from 'redux'
import lightsReducer from './lights.reducer'
import groupsReducer from './groups.reducer'

const rootReducer = combineReducers({
  lights: lightsReducer,
  groups: groupsReducer
})

export default rootReducer
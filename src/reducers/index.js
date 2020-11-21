import { combineReducers } from 'redux'
import lightsReducer from './lights.reducer'

const rootReducer = combineReducers({
  lights: lightsReducer
})

export default rootReducer
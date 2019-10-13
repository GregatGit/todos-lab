import { combineReducers } from 'redux'
import todos from './reducer_todos'
const rootReducer = combineReducers({
  todos
})

export default rootReducer
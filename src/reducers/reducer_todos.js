import { TODO_DELETE, TODO_DONE, TODO_ADD } from '../actions'

const init = [
  { name: 'walk dog', done: false }, 
  { name: 'build app', done: false }
]

export default function(state = init, action) {
  switch (action.type) {
    case TODO_DONE:
      const doneState = [...state]
      doneState[action.payload].done = true
      return doneState
    case TODO_DELETE:
      const deleteState = [...state]
      deleteState.splice(action.payload, 1)
      return deleteState
    
    case TODO_ADD:
      return [...state, action.payload]

    default:
      return state
  }
}

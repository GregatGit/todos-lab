import { TODO_DELETE, TODO_DONE_TOGGLE, TODO_ADD } from '../actions'

const init = [
  { name: 'walk dog', done: false }, 
  { name: 'build app', done: false }
]

export default function(state = init, action) {
  switch (action.type) {
    case TODO_DONE_TOGGLE:
      const doneState = [...state]
      
      for (let i = 0; i < doneState.length; i++){
        if (doneState[i].name === action.payload){
          doneState[i].done = !doneState[i].done
          return doneState
        }
      }
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

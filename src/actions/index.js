export const TODO_DONE = 'TODO_DONE'
export const TODO_DELETE = 'TODO_DELETE'

export function todoDone(index) {
  return {
    type: TODO_DONE,
    payload: index
  }
}

export function todoDelete(index) {
  return {
    type: TODO_DELETE,
    payload: index
  }
}
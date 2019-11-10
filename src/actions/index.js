export const TODO_DONE_TOGGLE = 'TODO_DONE_TOGGLE'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_ADD = 'TODO_ADD'
export const TOGGLE_ALL = 'TOGGLE_ALL'

export function toggleAll() {
  return {
    type: TOGGLE_ALL
  }
}

export function todoAdd(name) {
  const todo = { name, done: false}
  return {
    type: TODO_ADD,
    payload: todo
  }
}

export function todoDone(name) {
  return {
    type: TODO_DONE_TOGGLE,
    payload: name
  }
}

export function todoDelete(index) {
  return {
    type: TODO_DELETE,
    payload: index
  }
}
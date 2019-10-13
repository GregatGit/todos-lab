export const TODO_DONE = 'TODO_DONE'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_ADD = 'TODO_ADD'

export function todoAdd(name) {
  const todo = { name, done: false}
  return {
    type: TODO_ADD,
    payload: todo
  }
}

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
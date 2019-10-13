import React from 'react'
import { connect } from 'react-redux'
import { todoDone, todoDelete } from '../actions'
import CreateTodo from './CreateTodoA'
import { Divider } from '@material-ui/core'

const MainList = ({ todos, todoDone, todoDelete }) => {

  function handleDone(index) {
    todoDone(index)
  }

  function handleDelete(index) {
    todoDelete(index)
  }

  function showTodos(list) {
    if (list.length === 0) return <li>Your list is empty</li>
    return list.map((todo, index) => {
      return (
        <li key={index}>
          {todo.done ? <s>{todo.name}</s> : todo.name}
          {todo.done ? <span></span> : <button onClick={() => handleDone(index)}>DONE</button>}
          <button onClick={() => handleDelete(index)}>DELETE</button>
        </li>
      )
    })
  }
  return (
    <div>
      <h2>List of Todos</h2>
      <ul>{showTodos(todos)}</ul>
      <Divider />
      <CreateTodo />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { todoDone, todoDelete })(MainList)

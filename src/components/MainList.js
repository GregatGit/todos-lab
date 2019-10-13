import React from 'react'
import { connect } from 'react-redux'
import { todoDone } from '../actions'

const MainList = ({ todos, todoDone }) => {

  function handleDone(index) {
    todoDone(index)
  }

  function showTodos(list) {
    return list.map((todo, index) => {
      return (
        <li key={index}>
          {todo.done ? <s>{todo.name}</s> : todo.name}
          {todo.done ? <span></span> : <button onClick={() => handleDone(index)}>DONE</button>}
          <button>DELETE</button>
        </li>
      )
    })
  }
  return (
    <div>
      Main List
      <ul>{showTodos(todos)}</ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { todoDone })(MainList)

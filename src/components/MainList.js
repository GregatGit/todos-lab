import React from 'react'
import { connect } from 'react-redux'

const MainList = ({ todos }) => {
  function showTodos(list) {
    return list.map((todo, index) =>{
      return (<li key={index}>
        {todo.done ? <s>{todo.name}</s> : todo.name}
        <button>DONE</button>
        <button>DELETE</button>
        </li>)
    })
  }
  return (
    <div>
      Main List
      <ul>
        {showTodos(todos)}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(MainList)

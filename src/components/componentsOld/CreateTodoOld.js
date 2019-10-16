import React, { useState } from 'react'
import { connect } from 'react-redux'
import { todoAdd } from '../../actions'

const CreateTodo = ({ todoAdd }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    todoAdd(todo)
    setTodo('')
  }

  const handleChange = e => {
    setTodo(e.target.value)
  }

  return (
    <div>
      <h2>Add Todo to your list</h2>
      <form onSubmit={handleSubmit}>
      <label forhtml="name">Todo (3 to 20 characters):</label>

      <input onChange={handleChange} type="text" id="todo" name="todo" required
             minLength="3" maxLength="20" size="20" value={todo} />
             <button>Add</button>
      </form>
    </div>
  )
}

export default connect(null, { todoAdd })(CreateTodo)

import React, { useState } from 'react'

const CreateTodo = () => {
  const [todo, setTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('hi')
  }

  const handleChange = e => {
    setTodo(e.target.value)
  }

  return (
    <div>
      <h2>Add Todo to your list</h2>
      <form onSubmit={handleSubmit}>
      <label forhtml="name">Todo (4 to 8 characters):</label>

      <input onChange={handleChange} type="text" id="todo" name="todo" required
             minLength="3" maxLength="20" size="20" value={todo} />
             <button>Add</button>
      </form>
    </div>
  )
}

export default CreateTodo

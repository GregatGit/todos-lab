import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, DialogContentText, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { todoAdd } from '../actions'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

function CreateTodo({ todoAdd }) {
  const classes = useStyles()

  const [todo, setTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    let word = todo.trim()
    if(word.length < 3){
      alert('too small, must be 3 or more leters')
      return
    }
    todoAdd(todo)
    setTodo('')
  }

  const handleChange = e => {
    setTodo(e.target.value)
  }

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <DialogContentText>Add New Todo</DialogContentText>
        <TextField
          onChange={handleChange}
          label="todo"
          id="margin-none"
          defaultValue=""
          className={classes.textField}
          helperText="Write you new todo"
          value={todo}
          variant="filled"
        />
        <Button variant="outlined" onClick={handleSubmit}>ADD</Button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { todoAdd }
)(CreateTodo)

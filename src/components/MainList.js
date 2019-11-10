import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { todoDone, todoDelete, toggleAll } from '../actions'
import CreateTodo from './CreateTodo'
import { makeStyles } from '@material-ui/core/styles'
import { List, Divider, Typography, Button } from '@material-ui/core/'
import TheListItem from './TheListItem'
import OnLineTodos from './OnlineTodos'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

function MainList({ todos, todoDone, todoDelete, toggleAll }) {
  const classes = useStyles()

  function handleDelete(index) {
    todoDelete(index)
  }

  const handleToggle = name => () => {
    todoDone(name)
  }

  const handleToggleAll = () =>{
    const countDone = todos.filter(todo => !todo.done)
    let done = true
  
    if (todos.length === 0 || countDone.length === 0) {
      done = false
    }
    toggleAll(done)
  }

  return (
    <Fragment>
      <Typography variant="h5">The List</Typography>
      <List className={classes.root}>
        {todos.map(({ name, done }, index) => {
          const labelId = `checkbox-list-label-${name}`
          return (
            <TheListItem
              key={name}
              name={name}
              done={done}
              labelId={labelId}
              index={index}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          )
        })}
      </List>
      <Button onClick={handleToggleAll}>Toggle All</Button>
      <Divider />
      <CreateTodo />
      <OnLineTodos />
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(
  mapStateToProps,
  { todoDone, todoDelete, toggleAll }
)(MainList)

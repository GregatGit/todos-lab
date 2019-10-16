import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { todoDone, todoDelete } from '../actions'
import CreateTodo from './CreateTodo'
import { makeStyles } from '@material-ui/core/styles'
import { List, Divider, Typography } from '@material-ui/core/'
import TheListItem from './TheListItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

function MainList({ todos, todoDone, todoDelete }) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([0])

  function handleDelete(index) {
    todoDelete(index)
  }

  const handleToggle = name => () => {
    const currentIndex = checked.indexOf(name)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(name)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
    todoDone(name)
  }

  return (
    <Fragment>
      <Typography variant="h5">The List</Typography>
      <List className={classes.root}>
        {todos.map(({ name }, index) => {
          const labelId = `checkbox-list-label-${name}`
          return (
            <TheListItem
              key={name}
              name={name}
              checkedArr={checked}
              labelId={labelId}
              index={index}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          )
        })}
      </List>
      <Divider />
      <CreateTodo />
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
  { todoDone, todoDelete }
)(MainList)

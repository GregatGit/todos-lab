import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { todoDone, todoDelete } from '../actions'
import CreateTodo from './CreateTodoA'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
  Divider,
} from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import CommentIcon from '@material-ui/icons/Comment'

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
  }

  return (
    <Fragment>
      <List className={classes.root}>
        {todos.map(({name}, index) => {
          const labelId = `checkbox-list-label-${name}`

          return (
            <ListItem
              key={name}
              role={undefined}
              dense
              button
              onClick={handleToggle(name)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={name} />
              <ListItemSecondaryAction>
                <IconButton
                onClick={() => handleDelete(index)}
                edge="end"
                  aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
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

export default connect(mapStateToProps, { todoDone, todoDelete })(MainList)

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Badge } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function TopBar({ todos }) {
  const classes = useStyles()
  const countDone = todos.filter(todo => !todo.done)
  let color = 'primary'

  if (todos.length === 0 || countDone.length === 0) {
    color = 'secondary'
  }

  return (
    <div className={classes.root}>
      <AppBar color={color} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Badge
              className={classes.padding}
              color="secondary"
              badgeContent={countDone.length}
            >
              MY TODO LAB
            </Badge>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TopBar)

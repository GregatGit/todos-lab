import React from 'react'
import { connect } from 'react-redux'

const MainList = ({ todos }) => {
  console.log(todos)
  return (
    <div>
      Main List
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(MainList)

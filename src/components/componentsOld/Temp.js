import React from 'react'
import { connect } from 'react-redux'

const Temp = (props) => {
  console.log(props.names)
  return (
    <div>
      Members:
      <ul>
      {props.names.map(name => {
        return (<li key={name.name}>Name: {name.name} - Age: {name.age}</li>)
      })}
      </ul>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    names: state.temp
  }
}
export default connect(mapStateToProps)(Temp)


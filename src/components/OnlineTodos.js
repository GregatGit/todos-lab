import React, { useState, useEffect} from 'react'
import { CircularProgress } from '@material-ui/core'
import { todoAdd } from '../actions'
import { connect } from 'react-redux'

import firebase from '../firebase'

// firebase.firestore().collection('todos').add({
//   name: 'read book', done: false
// })

const OnlineTodos = ({ todoAdd }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('todos')
      .onSnapshot(snapshot => {
        const newTodos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        newTodos.forEach(todo => todoAdd(todo.name))
        setLoaded(true)
      })
    return () => {
      unsubscribe()
    };
  }, [])
  return (
    <div>
    {!loaded ? <CircularProgress /> : ''}  
    </div>
  )
}

export default connect(null, { todoAdd })(OnlineTodos)

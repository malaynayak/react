import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import classes from './AddTodo.module.css';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className={classes.Wrapper}>
      <form
        className={classes.Form}
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div className={classes.Input}>
          <input className={classes.InputElement} ref={node => (input = node)} />
        </div>
        <button className={classes.Submit} type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
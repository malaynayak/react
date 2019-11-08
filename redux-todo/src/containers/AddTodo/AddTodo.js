import React from 'react'
import { connect } from 'react-redux'
import { addTodo, resetTodo } from '../../actions'
import classes from './AddTodo.module.css';
import Link from '../../components/Link/Link';

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
        <button className={classes.Submit} type="submit">Add</button>
        <Link active onClick={(e) => {e.preventDefault(); dispatch(resetTodo())}} type="Danger">Reset</Link>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
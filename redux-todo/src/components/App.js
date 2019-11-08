
import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList/VisibleTodoList'
import classes from './App.module.css'

const App = () => (
  <div className={classes.Container}>
    <div className={classes.Wrapper}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
)

export default App
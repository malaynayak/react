
import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList/VisibleTodoList'
import classes from './App.module.css'

const App = () => (
  <div className={classes.Container}>
    <div className={classes.Wrapper}>
      <div className={classes.Header}><h1>Todos</h1></div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
)

export default App
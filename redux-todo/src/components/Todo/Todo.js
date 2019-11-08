import React from 'react'
import PropTypes from 'prop-types'
import classes from './Todo.module.css';

const Todo = ({ onClick, completed, text }) => {
    let todoClasses = [classes.Todo];
    if(completed){
        todoClasses.push(classes.Completed)
    }
    return (
        <li
            onClick={onClick}
            className={todoClasses.join(' ')}
        >
            {text}
        </li>
    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
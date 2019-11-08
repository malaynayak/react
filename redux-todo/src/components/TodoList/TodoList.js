import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'
import classes from './TodoList.module.css';

const TodoList = ({ todos, toggleTodo }) => {
    let list = (
        <ul className={classes.List}>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            ))}
        </ul>
    );
    if (!todos.length) {
        list = <div className={classes.Empty}>Nothing to do!</div>
    }
    return (
        <div className={classes.TodoList}>
            {list}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList
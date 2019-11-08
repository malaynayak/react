import React from 'react'
import PropTypes from 'prop-types'
import classes from './Link.module.css';

const Link = ({ active, type, children, onClick }) => (
    <button
        className={[classes.Button, classes[type]].join(' ')}
        onClick={onClick}
        disabled={!active}
    >
        {children}
    </button>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
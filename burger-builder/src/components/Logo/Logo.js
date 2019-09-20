import React from 'react';
import burgerLogoo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogoo} alt="Burger Builder" />
        </div>	
    );
};

export default logo;
import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    
    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>Please enter a valid value !</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                value={props.value}
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                value={props.value}
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select value={props.value} className={inputClasses.join(' ')}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option 
                            key={option.value} 
                            value={option.value}>
                            {option.displayName}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input 
                value={props.value}
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Lebel}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>	
    );
};

export default input;
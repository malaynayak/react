import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: true
            },
        },
        isSignUp: true,
        formIsValid: false,
    }

    switchAuthModeHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp}
        })
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.trim().length <= rules.maxLength && isValid;
        }
        if (rules.email) {
            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            isValid = reg.test(value.trim()) && isValid;
        }
        return isValid;
    }

    inputChangedHandeler = (event, controlName) =>{
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(
            this.state.controls.email.value,
            this.state.controls.password.value,
            this.state.isSignUp
        );
    }

    render() {
        const formsElementsArray = [];
        for (let key in this.state.controls) {
            formsElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form = formsElementsArray.map(formElement => (
            <Input 
                changed={(event) => this.inputChangedHandeler(event, formElement.id) }
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                value={formElement.config.value} />
            
        ));

        if (this.props.loading) {
            form = <Spinner />
        }
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{ this.props.error.message }</p>
        }
        return (
            <div className={classes.Auth}>
                { errorMessage } 
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button
                        clicked={this.submitHandler}
                        btnType="Success">SUBMIT</Button>
                    <Button
                        clicked={this.switchAuthModeHandler}
                        btnType="Danger">SWITCH TO {this.state.isSignUp ? 'SIGN IN' : 'SIGN UP' }</Button>
                </form>
                
            </div>
        );
    }
};
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
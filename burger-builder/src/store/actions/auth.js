import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logOut = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtx3LkBvZ3v5hQ_vaHFT5sotPfm86UrHk";
        if (!isSignUp) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtx3LkBvZ3v5hQ_vaHFT5sotPfm86UrHk"
        }

        Axios.post(url, {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeOut(response.data.expiresIn));
        })
        .catch(error => {
            dispatch(authFail(error.response.data.error));
        });

    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}
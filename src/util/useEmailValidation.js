import React, { useState, useReducer } from 'react';
import useInterval from './useInterval';
function useEmailValidation(seconds) {
    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const [emailValid, setEmailValid] = useState(false);

    const emailReducer = (state, action) => {
        const isEmailValid = validateEmail(action);
        setEmailValid(isEmailValid);
        return action;
    };

    const maxSeconds = seconds;
    const [email, setEmail] = useReducer(emailReducer, '');
    const [count, setCount] = useState(maxSeconds);

    useInterval(() => {
        setCount(count - 1);
    }, 1000);
    return { setEmail, email, setCount, count, emailValid };
}

export default useEmailValidation;

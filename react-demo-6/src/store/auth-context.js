import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    
    const calculateRemainingTime = (expirationTime) => {
        const currentTime = new Date().getTime();
        const adjustedExpirationTime = new Date(expirationTime).getTime();
        const remainingDuration = adjustedExpirationTime - currentTime;
        return remainingDuration;
    };

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    const [token, setToken] = useState(remainingTime > 0 ? storedToken : null);
    const history = useHistory();
    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        history.replace('/login');
    }, [history]);

    useEffect(() => {
        if (remainingTime <= 60000) {
            logoutHandler();
        } else {
            const logoutTimer = setTimeout(logoutHandler, remainingTime);
            return () => clearTimeout(logoutTimer);
        }
    }, [logoutHandler, remainingTime]);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingDuration = calculateRemainingTime(expirationTime);
        setTimeout(logoutHandler, remainingDuration);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;

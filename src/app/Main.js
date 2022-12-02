import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import cookie from '../module/Cookie';
import jwt_decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import "react-datepicker/dist/react-datepicker.css";
import Page from '../components/Page';
import Layout from '../components/Layout';
import AppMenu from './AppMenu';
import Router from './Router';
import LoginView from './LoginView';

const Main = () => {
    const [authState, setAuthState] = useState({
        login: (sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== undefined),
        loginHandler: (userToken) => {
            sessionStorage.setItem('token', userToken.accessToken);
            const decoded = jwt_decode(userToken.refreshToken);
            cookie.setCookie('refreshToken', userToken.refreshToken, {
                expires: new Date(decoded.exp * 1000)
            });
            setAuthState(prevState => ({
                ...prevState,
                login: true
            }));
        },
        external: window.location.pathname.indexOf('/share/') == 0
    });

    useEffect(()=> {
    }, [authState.login]);

    if (!authState.login && !authState.external) {
        return (
            <LoginView loginHandler={authState.loginHandler}></LoginView>
        )
    }
    return (
        <BrowserRouter>
            <Page layout={(
                <Layout pageMenu={
                    <AppMenu/>
                } pageRouter={
                    <Router></Router>
                } />
            )} />
        </BrowserRouter>
    )
};
export default Main;

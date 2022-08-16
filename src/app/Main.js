import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import "react-datepicker/dist/react-datepicker.css";
import Page from '../components/Page';
import Layout from '../components/Layout';
import AppMenu from './AppMenu';
import Router from './Router';
import LoginView from './LoginView';

const Main = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
    const [authState, setAuthState] = useState({
        login: (sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== undefined),
        loginHandler: (userToken) => {
            sessionStorage.setItem('token', userToken.accessToken);
            setCookie('refreshToken', userToken.refreshToken, {
                path: '/api'
            });
            setAuthState(prevState => ({
                ...prevState,
                login: true
            }));
        },
        logoutHandler: () => {
            sessionStorage.removeItem('token');
            setAuthState(prevState => ({
                ...prevState,
                login: false
            }));
            alert('Successfully Log out');
        },
        expirationHanlder: () => {
            // TODO: Call Refresh API
            sessionStorage.removeItem('token');
            setAuthState(prevState => ({
                ...prevState,
                login: false
            }));
            alert('Session Expired. Please login again');
        }
    });
    axios.defaults.withCredentials = true;

    useEffect(()=> {
    }, [authState.login]);

    if (!authState.login) {
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
                    <Router authState={authState}></Router>
                } />
            )} />
            {/* <AuthProvider /> */}
        </BrowserRouter>
    )
};
export default Main;
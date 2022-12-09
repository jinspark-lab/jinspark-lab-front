import React, { useEffect } from 'react';
import useScript from '../hooks/UseScript';
import api from '../module/Api';
import cookie from '../module/Cookie';
import LocalLoginBox from '../components/login/LocalLoginBox';
import GoogleLoginBox from '../components/login/GoogleLoginBox';
import '../styles/Login.css';

const LoginView = ({ loginHandler }) => {
    const renderLoginButton = () => {
        return (
            <div>
                <GoogleLoginBox loginHandler={loginHandler} />
                {
                    (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
                    ? <LocalLoginBox loginHandler={loginHandler} /> : <div />
                }
            </div>
        )
    }

    useEffect(()=> {
    }, []);

    return (
        <div>
            <h5>Do you want to see the entire Lab?</h5>
            { renderLoginButton() }
        </div>
    )
};
export default LoginView;

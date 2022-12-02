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
                {
                    (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
                    ? <LocalLoginBox loginHandler={loginHandler} /> : <div></div>
                }
                <GoogleLoginBox loginHandler={loginHandler} />
            </div>
        )
    }

    useEffect(()=> {
    }, []);

    return (
        <div className='container login-box'>
            <div className='card mb-3'>
                <div className='row no-gutters'>
                    <div className='col-md-3' style={{'display': 'flex'}}>
                        <img src="https://d26rx9t37cawwe.cloudfront.net/lab-icon.png" className="card-im img-fluid" alt="..." />
                    </div>
                    <div className='col-md-9'>
                        <div className='card-body'>
                            <h5 className='card-title'>Sign In</h5>
                            <p className="card-text" style={{'textAlign': 'left'}}>Welcome to JinsparkLab! This lab is for Funny IT, Dev and Software.<br></br>
                            This service is for "Portfolio" and "Personal Service" for sharing.
                            <br></br>
                            Please Sign In using your Social ID or Access the page using privileged shared link.</p>
                            <hr />
                            <div>
                            { renderLoginButton() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default LoginView;

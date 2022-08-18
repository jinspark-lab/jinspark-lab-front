import React, { useEffect } from 'react';
import useScript from '../hooks/UseScript';
import api from '../module/Api';
import cookie from '../module/Cookie';
import '../styles/Login.css';

const LoginView = ({ loginHandler }) => {
    const gscript = useScript('https://accounts.google.com/gsi/client', () => {
    });
    const clientId = '122046664308-1gslgg7fm1i1eaahqpip5qgrt2raif8d.apps.googleusercontent.com';

    const oauth2Refresh = async () => {
        if (cookie.getCookie('refreshToken')) {
            const response = await api.post('http://localhost:8080/login/oauth2/refresh');
            console.log(response);
        }
    };

    useEffect(()=> {
        window.signInCallback = async (res) => {
            const requestBody = {
                credential: res.credential
            };
            const response = await api.post('http://localhost:8080/login/oauth2/code/google', requestBody);
            console.log(response);
            loginHandler(response.data);
        };
        oauth2Refresh();
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
                                <div id="g_id_onload"
                                    data-client_id={clientId}
                                    data-callback='signInCallback'
                                    data-auto_prompt="false">
                                </div>
                                <div className="g_id_signin"
                                    data-type="standard"
                                    data-size="large"
                                    data-theme="outline"
                                    data-text="sign_in_with"
                                    data-shape="rectangular"
                                    data-logo_alignment="left">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default LoginView;
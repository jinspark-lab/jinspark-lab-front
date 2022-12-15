import React, { useEffect } from 'react';
import useScript from '../../hooks/UseScript';
import api from '../../module/Api';
import cookie from '../../module/Cookie';
import '../../styles/Login.css';

const GoogleLoginBox = ({ loginHandler }) => {
    const gscript = useScript('https://accounts.google.com/gsi/client', () => {
    });
    const clientId = '122046664308-1gslgg7fm1i1eaahqpip5qgrt2raif8d.apps.googleusercontent.com';

    useEffect(()=> {
        window.signInCallback = async (res) => {
            const requestBody = {
                credential: res.credential
            };
            const response = await api.post('/login/oauth2/code/google', requestBody);
            loginHandler(response.data);
        };
    }, []);

    return (
        <div className='d-grid gap-2 p-1' style={{'justify-content': 'center'}}>
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
    )
};
export default GoogleLoginBox;

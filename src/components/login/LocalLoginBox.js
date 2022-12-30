import React, { useEffect } from 'react';
import api from '../../module/Api';
import cookie from '../../module/Cookie';
import '../../styles/Login.css';

const LocalLoginBox = ({ loginHandler }) => {
    const oauth2Login = async () => {
        const requestBody = {
            credential: process.env.REACT_APP_LOCAL_CODE
        };
        const response = await api.post('/login/oauth2/local', requestBody);
        loginHandler(response.data);
    };

    useEffect(()=> {
    }, []);

    return (
        <div className='d-grid gap-2 p-1 justify-content-center'>
            <button className='btn btn-outline-success' onClick={oauth2Login}>I am Service Developer</button>
        </div>
    )
};
export default LocalLoginBox;

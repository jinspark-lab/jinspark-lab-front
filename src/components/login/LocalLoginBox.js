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
        <div>
            <button className='btn btn-success' onClick={oauth2Login}>Login Local</button>
        </div>
    )
};
export default LocalLoginBox;

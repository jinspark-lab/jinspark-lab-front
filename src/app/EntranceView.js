import React, { useEffect } from 'react';
import useScript from '../hooks/UseScript';
import api from '../module/Api';
import cookie from '../module/Cookie';

const EntranceView = ({ loginView }) => {

    useEffect(()=> {
    }, []);

    return (
        <div className='container' style={{'backgroundColor': 'rgb(251, 251, 251)'}}>
            <div className='carousel slide'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src='https://d26rx9t37cawwe.cloudfront.net/lab_enterance.png' alt='...' />
                    </div>
                </div>
            </div>
            <div>
            {
                loginView
            }
            </div>
        </div>
    )
};
export default EntranceView;

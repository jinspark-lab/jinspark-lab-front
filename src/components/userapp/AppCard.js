import React from 'react';
import styles from '../../styles/Item.module.css';

const AppCard = ({ id, onClickHandler, onImgErrorHandler }) => {
    return (
        <div className='col-md-4'>
            <div className='card mb-4 box-shadow' onClick={() => onClickHandler(id)}>
                <img className='card-img-top' src="..." alt='UserAppImage'
                    style={{'width': '100%', 'height': '255px', 'display': 'block'}}
                    onError={onImgErrorHandler}
                    />
                <div className='card-body'>
                    <p className='card-text'>{id}</p>
                    <div className='d-flex'>
                        <button className='btn btn-success'>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;

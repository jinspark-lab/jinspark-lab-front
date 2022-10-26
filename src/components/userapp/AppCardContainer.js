import React from 'react';
import AppCard from './AppCard';

const AppCardContainer = ({ inputCards, onClickHandler, onImgErrorHandler }) => {

    const appCardList = inputCards.map(
        ({appId, thumbnailUrl}) => (
            <AppCard
            id={appId}
            onClickHandler={onClickHandler}
            onImgErrorHandler={onImgErrorHandler}
            key={appId}
            />
        )
    );

    return (
        <div className='row'>
            { appCardList }
        </div>
    );
};

export default AppCardContainer;

import React from 'react';
import AppCardContainer from '../../components/userapp/AppCardContainer';
import '../../styles/UserAppPage.css';

const UserAppPage = () => {

    // const imgUrl = 'https://d26rx9t37cawwe.cloudfront.net/lab_arch.png';

    const onClickCard = (id) => {
        console.log(id);
    };

    const onErrorImage = (e) => {
        e.target.src = 'noimage.png';
    };

    const cardList = [
        {
            userId : '',
            appId : "App First",
            thumbnailUrl : ''
        },
        {
            userId : '',
            appId : "App Second",
            thumbnailUrl : ''
        }
    ];

    return (
        <div>
            <div className='container'>
                <h2 className='jumbotron-heading'>
                User Applications :)
                </h2>
                <p className='lead'>
                This is application groups
                </p>
            </div>
            <div className='album bg-light'>
                    <AppCardContainer inputCards={cardList} onClickHandler={onClickCard} onImgErrorHandler={onErrorImage}>
                    </AppCardContainer>
            </div>
        </div>
    )
};
export default UserAppPage;

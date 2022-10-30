import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AppCardContainer from '../../components/userapp/AppCardContainer';
import '../../styles/UserAppPage.css';

const UserAppPage = () => {
    const navigate = useNavigate();
    const [userAppShortcuts, setUserAppShortcuts] = useState(null);

    // const imgUrl = 'https://d26rx9t37cawwe.cloudfront.net/lab_arch.png';

    const onClickCard = (id) => {
        navigate('/userapp/' + id, {
            state: {
                shortcuts: cardList
            }
        });
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

    const renderContents = () => {
        if (!userAppShortcuts) {
            return <div>There is no UserApp created.</div>
        } else {
            return (<div>
                <AppCardContainer inputCards={cardList} onClickHandler={onClickCard} onImgErrorHandler={onErrorImage} />
            </div>)
        }
    };

    const fetchUserAppShortcuts = () => {

    };

    useEffect(() => {
        fetchUserAppShortcuts();
    }, []);

    return (
        <div>
            <div className='container'>
                <h3 className='jumbotron-heading p-2'>
                User Applications :)
                </h3>
            </div>
            <div className='album bg-light'>
                {
                    renderContents()
                }
            </div>
        </div>
    )
};
export default UserAppPage;

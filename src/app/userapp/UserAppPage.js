import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import AppCardContainer from '../../components/userapp/AppCardContainer';
import LoadingView from '../../components/LoadingView';
import '../../styles/UserAppPage.css';

const UserAppPage = () => {
    const navigate = useNavigate();
    const [userAppShortcuts, setUserAppShortcuts] = useState(null);

    // const imgUrl = 'https://d26rx9t37cawwe.cloudfront.net/lab_arch.png';

    const onClickCard = (id) => {
        navigate('/userapp/' + id, {
            state: {
                shortcuts: userAppShortcuts
            }
        });
    };

    const onErrorImage = (e) => {
        e.target.src = 'noimage.png';
    };

    const renderContents = () => {
        if (!userAppShortcuts) {
            return <LoadingView />
        } else if (userAppShortcuts.length === 0) {
            return <div>There is no UserApp created.</div>
        }
        return (<div>
            <AppCardContainer inputCards={userAppShortcuts} onClickHandler={onClickCard} onImgErrorHandler={onErrorImage} />
        </div>)
    };

    const fetchUserAppShortcuts = async () => {
        const response = await api.post('/api/userapp/shortcuts', {
        });
        setUserAppShortcuts(response.data.userAppShortcutList);
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

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import AppCardContainer from '../../components/userapp/AppCardContainer';
import EditUserAppContainer from './EditUserAppContainer';
import LoadingView from '../../components/LoadingView';
import '../../styles/UserAppPage.css';

const EditUserAppPage = () => {
    const navigate = useNavigate();
    const [userAppShortcuts, setUserAppShortcuts] = useState(null);
    const [selectedApp, setSelectedApp] = useState(null);

    const onClickCard = (id) => {
        // navigate('/userapp/' + id, {
        //     state: {
        //         shortcuts: userAppShortcuts
        //     }
        // });
        setSelectedApp(id);
    };

    const onErrorImage = (e) => {
        e.target.src = 'noimage.png';
    };

    const renderShortcuts = () => {
        if (!userAppShortcuts) {
            return (
                <div>
                    <div className='container'>
                        <h3 className='jumbotron-heading p-2'>
                        User Applications :)
                        </h3>
                    </div>
                    <div className='album bg-light'>
                        <LoadingView />
                    </div>
                </div>
            )
        } else if (userAppShortcuts.length == 0) {
            return (
                <div className='container'>
                    <h3 className='jumbotron-heading p-2'>
                    User Applications :)
                    </h3>
                    <div>There is no UserApp to edit.</div>
                </div>
            )
        }
        return (
            <div>
                <div className='container'>
                    <h3 className='jumbotron-heading p-2'>
                    User Applications :)
                    </h3>
                </div>
                <div className='album bg-light'>
                    <AppCardContainer inputCards={userAppShortcuts} onClickHandler={onClickCard} onImgErrorHandler={onErrorImage} />
                </div>
            </div>
        )
    };

    const renderAppContainer = () => {
        return <EditUserAppContainer appId={selectedApp} />
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
            {
                !selectedApp ? renderShortcuts()
                : renderAppContainer()
            }
        </div>
    )
};
export default EditUserAppPage;

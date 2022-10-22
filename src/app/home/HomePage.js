import React, { useState, useEffect } from 'react';
import api from '../../module/Api';
import jwt_decode from 'jwt-decode';
import cookie from '../../module/Cookie';
import ItemListContainer from '../../components/common/ItemListContainer';
import ProfileContentView from './ProfileContentView';
import LoadingView from '../../components/LoadingView';
import LabContentView from './LabContentView';

const HomePage = () => {
    const [content, setContent] = useState(null);
    const [menu, setMenu] = useState(0);
    // const token = sessionStorage.getItem('token');
    // const decoded = jwt_decode(token);
    // const userId = decoded.userId;

    const items = [
        {
            id: 0,
            text: 'My Profile'
        },
        {
            id: 1,
            text: 'About this Lab'
        }
    ];
    const fetchProfile = async () => {
        try {
            const response = await api.post('/api/profile', {
            });
            setContent(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    const fetchLab = async () => {
        try {
            const response = await api.post('/api/lab');
            setContent(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    const onClickMenu = (id) => {
        console.log("On Click Item : " + id);
        setContent(null);
        setMenu(id);
        if (id === 0) {
            fetchProfile();
        } else {
            fetchLab();
        }
    };
    const renderContent = () => {
        switch (menu) {
            case 0:
                return <ProfileContentView userProfile={content}></ProfileContentView>
            case 1:
                return <LabContentView userLab={content}></LabContentView>
            default:
                return <ProfileContentView userProfile={content}></ProfileContentView>
        }
    };

    useEffect(()=> {
        if (menu === 0) {
            fetchProfile();
        } else {
            fetchLab();
        }
    }, [menu]);

    return (
        <div className='row'>
            <div className='col-3'>
                <ItemListContainer inputItems={items} onClickHandler={onClickMenu}></ItemListContainer>
            </div>
            <div className='col-9'>
                {
                    !content ? <LoadingView></LoadingView>
                    : renderContent()
                }
            </div>
        </div>
    )
};
export default HomePage;

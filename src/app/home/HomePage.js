import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import ItemListContainer from '../../components/common/ItemListContainer';
import ProfileContentView from './ProfileContentView';
import LoadingView from '../../components/LoadingView';
import LabContentView from './LabContentView';

const HomePage = ({authState}) => {
    const [content, setContent] = useState(null);
    const [menu, setMenu] = useState(0);

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
            const token = sessionStorage.getItem('token');
            const decoded = jwt_decode(token);
            const userId = decoded.userId;

            const response = await axios.post('http://localhost:8080/api/profile', {
                    userId: userId
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });
            setContent(response.data);
        } catch (e) {
            console.log(e);
            if (e && e.response && e.response.status && e.response.status == 401) {
                authState.logoutHandler();
            }
        }
    };
    const fetchLab = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const decoded = jwt_decode(token);
            const userId = decoded.userId;

            const response = await axios.post('http://localhost:8080/api/lab/admin', {
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }                
            });
            setContent(response.data);
        } catch (e) {
            console.log(e);
            if (e && e.response && e.response.status && e.response.status == 401) {
                authState.logoutHandler();
            }
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
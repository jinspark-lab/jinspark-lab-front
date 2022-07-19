import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemListContainer from '../components/ItemListContainer';
import ProfileContentView from './ProfileContentView';
import LoadingView from '../components/LoadingView';
import LabContentView from './LabContentView';

const HomePage = () => {
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
            // 'https://jsonplaceholder.typicode.com/users'
            const response = await axios.post('http://localhost:8080/profile/admin', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setContent(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    const fetchLab = async () => {
        try {
            const response = await axios.post('http://localhost:8080/lab/admin', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
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
        }
    };

    // useEffect works as a componentDidMount()
    useEffect(()=> {
        fetchProfile();
    }, []);

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
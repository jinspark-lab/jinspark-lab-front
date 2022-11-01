import React, { useState } from 'react';
import ItemListContainer from '../../components/common/ItemListContainer';
import EditLabView from './EditLabView';
import AddUserAppContainer from './AddUserAppContainer';
import EditUserAppPage from './EditUserAppPage';
import SettingsView from './SettingsView';
import EditProfileContainer from './EditProfileContainer';

const AdminPage = () => {
    const [menu, setMenu] = useState(0);

    const items = [
        {
            id: 0,
            text: 'Edit Profile'
        },
        {
            id: 1,
            text: 'Edit Lab Intro'
        },
        {
            id: 2,
            text: 'Add User App'
        },
        {
            id: 3,
            text: 'Edit/Remove App'
        },
        {
            id: 100,
            text: 'Settings'
        }
    ];
    const onClickMenu = (id) => {
        setMenu(id);
    };
    const renderContent = () => {
        switch (menu) {
            case 0:
                return <EditProfileContainer></EditProfileContainer>
            case 1:
                return <EditLabView></EditLabView>
            case 2:
                return <AddUserAppContainer></AddUserAppContainer>
            case 3:
                return <EditUserAppPage></EditUserAppPage>
            case 100:
                return <SettingsView></SettingsView>
            default:
                return <EditProfileContainer></EditProfileContainer>
        }
    };

    return (
        <div className='row'>
            <div className='col-2'>
                <ItemListContainer inputItems={items} onClickHandler={onClickMenu}></ItemListContainer>
            </div>
            <div className='col-10'>
                { renderContent() }
            </div>
        </div>
    )
};
export default AdminPage;

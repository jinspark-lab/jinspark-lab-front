import React, { useState } from 'react';
import ItemListContainer from '../../components/common/ItemListContainer';
import EditLabView from './EditLabView';
import AddUserAppContainer from './AddUserAppContainer';
import EditUserAppPage from './EditUserAppPage';
import SettingsView from './SettingsView';
import EditProfileContainer from './EditProfileContainer';
import SharableContainer from './SharableContainer';

const AdminPage = () => {
    const [menu, setMenu] = useState(0);

    const items = [
        {
            id: 0,
            text: 'My Sharables'
        },
        {
            id: 1,
            text: 'Edit Profile'
        },
        {
            id: 2,
            text: 'Edit Lab Intro'
        },
        {
            id: 3,
            text: 'Add User App'
        },
        {
            id: 4,
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
                return <SharableContainer></SharableContainer>
            case 1:
                return <EditProfileContainer></EditProfileContainer>
            case 2:
                return <EditLabView></EditLabView>
            case 3:
                return <AddUserAppContainer></AddUserAppContainer>
            case 4:
                return <EditUserAppPage></EditUserAppPage>
            case 100:
                return <SettingsView></SettingsView>
            default:
                return <SharableContainer></SharableContainer>
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

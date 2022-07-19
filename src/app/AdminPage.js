import React, { useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import EditProfileView from './admin/EditProfileView';
import EditLabView from './admin/EditLabView';
import AddServiceView from './admin/AddServiceView';
import EditServiceView from './admin/EditServiceView';
import SettingsView from './admin/SettingsView';

const AdminPage = () => {
    const [menu, setMenu] = useState(0);

    // DB Layer ㅁㅏㄴ드ㄹ고, 어드민은 일단 로ㄹ에서만 띄우게 최소화. 로그인 붙이면 그때 퍼블릭
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
            text: 'Add Service'
        },
        {
            id: 3,
            text: 'Edit/Remove Service'
        },
        {
            id: 100,
            text: 'Settings'
        }
    ];
    const onClickMenu = (id) => {
        console.log("On Click Item : " + id);
        setMenu(id);
    };
    const renderContent = () => {
        switch (menu) {
            case 0:
                return <EditProfileView></EditProfileView>
            case 1:
                return <EditLabView></EditLabView>
            case 2:
                return <AddServiceView></AddServiceView>
            case 3:
                return <EditServiceView></EditServiceView>
            case 100:
                return <SettingsView></SettingsView>
        }
    };

    return (
        <div className='row'>
            <div className='col-3'>
                <ItemListContainer inputItems={items} onClickHandler={onClickMenu}></ItemListContainer>
            </div>
            <div className='col-9'>
                { renderContent() }
            </div>
        </div>
    )
};
export default AdminPage;
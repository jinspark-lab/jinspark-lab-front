import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import EditProfileView from './admin/EditProfileView';
import EditLabView from './admin/EditLabView';
import AddAlgorithmView from './admin/AddAlgorithmView';
import EditAlgorithmView from './admin/EditAlgorithmView';
import AddArchitectureView from './admin/AddArchitectureView';
import EditArchitectureView from './admin/EditArchitectureView';
import AddProjectView from './admin/AddProjectView';
import EditProjectView from './admin/EditProjectView';
import SettingsView from './admin/SettingsView';

const AdminPage = () => {
    const [content, setContent] = useState(null);
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
            text: 'Add Algorithm'
        },
        {
            id: 3,
            text: 'Edit/Remove Algorithm'
        },
        {
            id: 4,
            text: 'Add Architecture'
        },
        {
            id: 5,
            text: 'Edit/Remove Architecture'
        },
        {
            id: 6,
            text: 'Add Project'
        },
        {
            id: 7,
            text: 'Edit/Remove Project'
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
        console.log(menu);
        switch (menu) {
            case 0:
                return <EditProfileView></EditProfileView>
            case 1:
                return <EditLabView></EditLabView>
            case 2:
                return <AddAlgorithmView></AddAlgorithmView>
            case 3:
                return <EditAlgorithmView></EditAlgorithmView>
            case 4:
                return <AddArchitectureView></AddArchitectureView>
            case 5:
                return <EditArchitectureView></EditArchitectureView>
            case 6:
                return <AddProjectView></AddProjectView>
            case 7:
                return <EditProjectView></EditProjectView>
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
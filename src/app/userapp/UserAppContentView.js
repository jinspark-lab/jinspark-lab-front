import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import api from '../../module/Api';
import AppCardDetail from '../../components/userapp/AppCardDetail';
import ItemListContainer from '../../components/common/ItemListContainer';
import LoadingView from '../../components/LoadingView';
import '../../styles/UserAppPage.css';

const UserAppContentView = () => {
    const { appId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const shortcuts = location.state.shortcuts;
    const [userAppDetail, setUserAppDetail] = useState(null);

    const items = location.state.shortcuts.map((shortcut) => ({
        id: shortcut.appId,
        text: shortcut.appId
    }));

    const onClickMenu = (id) => {
        console.log("On Click Item : " + id);
        navigate('/userapp/' + id, {
            state: {
                shortcuts: shortcuts
            }
        });
    };

    const fetchUserApp = async () => {
        const response = await api.post('/api/userapp/detail?appId=' + appId, {
        });
        setUserAppDetail(response.data);
    };

    useEffect(()=> {
        fetchUserApp();
    }, []);

    return (
        <div className='userapp-page row'>
            <div className='col-2'>
                <ItemListContainer inputItems={items} onClickHandler={onClickMenu}></ItemListContainer>
            </div>
            <div className='col-10'>
                {
                    !userAppDetail ? <LoadingView />
                    : <AppCardDetail userAppDetail={userAppDetail} />
                }
            </div>
        </div>
    )
};
export default UserAppContentView;

import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProfileContentView from '../home/ProfileContentView';
import LoadingView from '../../components/LoadingView';
import ModalView from '../../components/ModalView';

const SharePageView = () => {
    const [contentId, setContentId] = useState(window.location.pathname.substr(window.location.pathname.lastIndexOf('/')).substring(1));
    const [content, setContent] = useState(null);
    const [errorModal, setErrorModal] = useState(false);
    const [result, setResult] = useState(null);

    const onClickLink = (id) => {
        window.location.href='/';
    };

    const fetchContent = async () => {
        const response = await axios.get(process.env.REACT_APP_ROUTE_API_URL + '/content/' + contentId);
        if (response.data.status === 400) {
            setErrorModal(true);
        } else {
            setContent(response.data);
            const path = response.data.contentUrl.substring(response.data.contentUrl.indexOf('/', 2));
            axios.get(process.env.REACT_APP_GATE_API_URL + path, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                setResult(response.data);
            }).catch(error => {
                console.error(error);
            }).finally(() => {
            });
        }
    };

    const errorModalContent = {
        title: 'Information',
        text: 'This content has not been shared.'
    };

    const onClickErrorModalSubmit = () => {
        setErrorModal(false);
        // navigate('/');
    };

    const renderContent = () => {
        if (!result) {
            return (
                <LoadingView />
            )
        }
        switch (content.contentType) {
            case "PROFILE":
                return (
                    <ProfileContentView userProfile={result} />
                )
            case "USER_APP":
                return (
                    <div>User App</div>
                )
            default:
                return (
                    <div>Invalid Content Type - content.contentType</div>
                );
        }
    };

    useEffect(() => {
        fetchContent();
    }, []);

    return (
        <div>
            <div style={{'textAlign':'right'}}>
                <p className='p-1'>
                <span className='fw-bold font-monospace m-3'>
                If you want to see more content or to create?
                </span>
                <button type='click' className='btn btn-primary btn-sm' onClick={onClickLink}>Go to the Main Lab-Page</button>
                </p>
            </div>
            <div  style={{'background': 'ghostwhite'}}>
                {
                    !content ? <LoadingView /> :
                    renderContent()
                }
            </div>
            <ModalView visible={errorModal} modalContent={errorModalContent} onClickSubmit={onClickErrorModalSubmit} />
        </div>
    )
};
export default SharePageView;

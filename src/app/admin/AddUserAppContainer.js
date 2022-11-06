import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import AddUserAppView from './AddUserAppView';
import ModalView from '../../components/ModalView';

const AddUserAppContainer = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState({
        appId: '',
        repoLink: '',
        introText: '',
        appLink: '',
        appPicture: '',
        architectureUrl: '',
        description: '',
        thumbnailUrl: ''
    });
    const [submitModal, setSubmitModal] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [errorStates, setErrorStates] = useState({
        appId: false,
        repoLink: false,
        introText: false,
        appLink: false,
        appPicture: false,
        architectureUrl: false,
        description: false,
        thumbnailUrl: false
    });

    const handleAppName = (e) => {
        setContent(prevState => ({
            ...prevState,
            appId: e.target.value
        }));
        setErrorStates(prevState => ({
            ...prevState,
            appId: e.target.value.length < 3
        }));
    };

    const handleRepoLink = (e) => {
        setContent(prevState => ({
            ...prevState,
            repoLink: e.target.value
        }));
    };

    const handleIntroText = (e) => {
        setContent(prevState => ({
            ...prevState,
            introText: e.target.value
        }));
    };

    const handleAppLink = (e) => {
        setContent(prevState => ({
            ...prevState,
            appLink: e.target.value
        }));
    };

    const handleAppPicture = (objectPath) => {
        setContent(prevState => ({
            ...prevState,
            appPicture: objectPath,
        }));
    };

    const deleteAppPicture = () => {
        setContent(prevState => ({
            ...prevState,
            appPicture: '',
        }));
    };

    const handleArchitectureUrl = (objectPath) => {
        setContent(prevState => ({
            ...prevState,
            architectureUrl: objectPath,
        }));
    };

    const deleteArchitectureUrl = () => {
        setContent(prevState => ({
            ...prevState,
            architectureUrl: '',
        }));
    }

    const handleDescription = (e) => {
        setContent(prevState => ({
            ...prevState,
            description: e.target.value
        }));
    };

    const handleThumbnailUrl = (objectPath) => {
        setContent(prevState => ({
            ...prevState,
            thumbnailUrl: objectPath
        }));
    };

    const deleteThumbnailUrl = () => {
        setContent(prevState => ({
            ...prevState,
            thumbnailUrl: ''
        }));
    };

    const onClickSubmit = () => {
        const validationError = Object.entries(errorStates).map(entry => entry[1]).reduce((a, b) => a || b);
        if (validationError) {
            return ;
        }

        const userAppRequest = {
            userApp: {
                appId: content.appId,
                repoLink: content.repoLink,
                introText: content.introText,
                appLink: content.appLink,
                appPicture: content.appPicture,
                architectureUrl: content.architectureUrl,
                description: content.description
            },
            thumbnailUrl: content.thumbnailUrl
        };
        api.post('/api/userapp/create', userAppRequest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            console.log(response);
            //TODO: Make Additional Page to inform
            setSubmitModal(true);
            setCancelModal(false);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const onClickCancel = () => {
        console.log("Cancel");
        setSubmitModal(false);
        setCancelModal(true);
    };

    const submitModalContent = {
        title: 'Information',
        text: 'UserApp Successfully Registered!'
    }

    const onClickSubmitModalSubmit = () => {
        setSubmitModal(false);
        navigate('/userapp');
    };

    const cancelModalContent = {
        title: 'Alert',
        text: 'Unsaved data will be disappeared.'
    };

    const onClickCancelModalSubmit = () => {
        setCancelModal(false);
        navigate('/userapp');
    };

    const onClickCancelModalCancel = () => {
        setCancelModal(false);
    };

    const handlers = {
        handleAppName,
        handleRepoLink,
        handleIntroText,
        handleAppLink,
        handleAppPicture,
        deleteAppPicture,
        handleArchitectureUrl,
        deleteArchitectureUrl,
        handleDescription,
        handleThumbnailUrl,
        deleteThumbnailUrl,
        onClickSubmit,
        onClickCancel
    };

    useEffect(() => {

    }, []);

    return (
        <div>
            <AddUserAppView content={content} errorStates={errorStates} handlers={handlers}></AddUserAppView>
            <ModalView visible={submitModal} modalContent={submitModalContent} onClickSubmit={onClickSubmitModalSubmit} />
            <ModalView visible={cancelModal} modalContent={cancelModalContent} onClickSubmit={onClickCancelModalSubmit} onClickCancel={onClickCancelModalCancel} />
        </div>
    )
};
export default AddUserAppContainer;

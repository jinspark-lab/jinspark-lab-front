import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import EditUserAppView from './EditUserAppView';
import LoadingView from '../../components/LoadingView';
import ModalView from '../../components/ModalView';

const EditUserAppContainer = ({appId}) => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [submitModal, setSubmitModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);

    const fetchUserApp = async () => {
        try {
            const response = await api.post('/api/userapp/admin?appId=' + appId, {
            });
            setContent(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleAppName = (e) => {
        setContent(prevState => ({
            ...prevState,
            appId: e.target.value
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

    const handleAppPicture = (e) => {
        setContent(prevState => ({
            ...prevState,
            appPicture: e.target.value
        }));
    };

    const handleArchitectureUrl = (e) => {
        setContent(prevState => ({
            ...prevState,
            architectureUrl: e.target.value
        }));
    };

    const handleDescription = (e) => {
        setContent(prevState => ({
            ...prevState,
            description: e.target.value
        }));
    };

    const handleThumbnailUrl = (e) => {
        setContent(prevState => ({
            ...prevState,
            thumbnailUrl: e.target.value
        }));
    };

    const onClickSubmit = () => {
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
        api.post('/api/userapp/update', userAppRequest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            //TODO: Make Additional Page to inform
            setSubmitModal(true);
            setDeleteModal(false);
            setCancelModal(false);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const onClickRemove = () => {
        setSubmitModal(false);
        setDeleteModal(true);
        setCancelModal(false);
    };

    const onClickCancel = () => {
        setSubmitModal(false);
        setDeleteModal(false);
        setCancelModal(true);
    };

    const submitModalContent = {
        title: 'Information',
        text: 'User App Successfully Updated!'
    }

    const onClickSubmitModalSubmit = () => {
        setSubmitModal(false);
        navigate('/userapp');
    };

    const deleteModalContent = {
        title: 'Warning',
        text: 'Content will be deleted.'
    };

    const onClickDeleteModalSubmit = () => {
        api.post('/api/userapp/delete?appId=' + content.appId,{
        }).then(response => {
            setDeleteModal(false);
            navigate('/userapp');
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const onClickDeleteModalCancel = () => {
        setDeleteModal(false);
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
        handleArchitectureUrl,
        handleDescription,
        handleThumbnailUrl,
        onClickSubmit,
        onClickRemove,
        onClickCancel
    };

    useEffect(()=> {
        fetchUserApp();
    }, []);

    return (
        <div>
            {
                !content ? <LoadingView />
                :
                <div>
                    <EditUserAppView content={content} handlers={handlers}></EditUserAppView>
                    <ModalView visible={submitModal} modalContent={submitModalContent} onClickSubmit={onClickSubmitModalSubmit} />
                    <ModalView visible={deleteModal} modalContent={deleteModalContent} onClickSubmit={onClickDeleteModalSubmit} onClickCancel={onClickDeleteModalCancel} />
                    <ModalView visible={cancelModal} modalContent={cancelModalContent} onClickSubmit={onClickCancelModalSubmit} onClickCancel={onClickCancelModalCancel} />
                </div>
            }
        </div>
    )
};
export default EditUserAppContainer;

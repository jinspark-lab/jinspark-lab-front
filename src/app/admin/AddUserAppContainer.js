import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import AddUserAppView from './AddUserAppView';

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
        api.post('/api/userapp/create', userAppRequest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            console.log(response);
            //TODO: Make Additional Page to inform
            alert("User App Registered");
            navigate('/userapp');
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
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
        onClickSubmit
    };

    useEffect(() => {

    }, []);

    return (
        <AddUserAppView content={content} handlers={handlers}></AddUserAppView>
    )
};
export default AddUserAppContainer;

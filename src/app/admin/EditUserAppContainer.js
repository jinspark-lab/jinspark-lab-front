import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import EditUserAppView from './EditUserAppView';
import LoadingView from '../../components/LoadingView';

const EditUserAppContainer = ({appId}) => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);

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
            alert("User App Modified");
            navigate('/userapp');
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const onClickRemove = () => {
        api.post('/api/userapp/delete?appId=' + content.appId,{
        }).then(response => {
            alert("User App Deleted");
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
        onClickSubmit,
        onClickRemove
    };

    useEffect(()=> {
        fetchUserApp();
    }, []);

    return (
        <div>
            {
                !content ? <LoadingView />
                : <EditUserAppView content={content} handlers={handlers}></EditUserAppView>
            }
        </div>
    )
};
export default EditUserAppContainer;

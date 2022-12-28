import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProfileContentView from '../home/ProfileContentView';
import LoadingView from '../../components/LoadingView';
import ModalView from '../../components/ModalView';
import MarkdownView from '../../components/MarkdownView';

import { AwsRum, AwsRumConfig } from 'aws-rum-web';

const SharePageView = () => {
    const [contentId, setContentId] = useState(window.location.pathname.substr(window.location.pathname.lastIndexOf('/')).substring(1));
    const [content, setContent] = useState(null);
    const [errorModal, setErrorModal] = useState(false);
    const [result, setResult] = useState(null);

    const onClickLink = (id) => {
        window.location.href='/';
    };

    const initRUM = async () => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            return ;
        }
        //AWS RUM
        try {
            const config: AwsRumConfig = {
                sessionSampleRate: 1,
                guestRoleArn: "arn:aws:iam::486403792456:role/RUM-Monitor-us-east-1-486403792456-8033575841761-Unauth",
                identityPoolId: "us-east-1:049b3e66-1a9d-482f-b23e-9afcb93535e9",
                endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
                telemetries: ["performance","errors","http"],
                allowCookies: true,
                enableXRay: false
            };

            const APPLICATION_ID: string = '030c98d6-e3ab-417a-9095-a59c8083e78a';
            const APPLICATION_VERSION: string = '1.0.0';
            const APPLICATION_REGION: string = 'us-east-1';

            const awsRum: AwsRum = new AwsRum(
                APPLICATION_ID,
                APPLICATION_VERSION,
                APPLICATION_REGION,
                config
            );
        } catch (e) {
            // Ignore the error
        }
        //
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
            case "BLOG":
                return (
                    <MarkdownView markdown={result} />
                )
            default:
                return (
                    <div>Invalid Content Type - content.contentType</div>
                );
        }
    };

    useEffect(() => {
        initRUM();
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

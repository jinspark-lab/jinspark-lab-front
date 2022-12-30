import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import ContentLinkContainer from '../../components/admin/ContentLinkContainer';
import LoadingView from '../../components/LoadingView';
import ModalView from '../../components/ModalView';
import '../../styles/AdminPage.css';

const SharableContainer = () => {
    const navigate = useNavigate();
    const [sharableContent, setSharableContent] = useState(null);
    const [submitModal, setSubmitModal] = useState(false);

    const onClickShareProfile = (contentId) => {
        setSharableContent(prevState => ({
            ...prevState,
            userProfileSharable: { ...sharableContent.userProfileSharable, shared: !sharableContent.userProfileSharable.shared }
        }));
    };

    const onClickShareUserApp = (contentId) => {
        var newList = sharableContent.userAppSharableList.map(userAppSharable => {
            let newUserAppSharable = userAppSharable;
            if (userAppSharable.contentId === contentId) {
                newUserAppSharable.shared = !userAppSharable.shared;
            }
            return newUserAppSharable;
        });
        setSharableContent(prevState => ({
            ...prevState,
            userAppSharableList: newList
        }));
    };

    const onClickShareUserBlog = (contentId) => {
        var newList = sharableContent.userBlogSharableList.map(userBlogSharable => {
            let newUserBlogSharable = userBlogSharable;
            if (userBlogSharable.contentId === contentId) {
                newUserBlogSharable.shared = !userBlogSharable.shared;
            }
            return newUserBlogSharable;
        });
        setSharableContent(prevState => ({
            ...prevState,
            userBlogSharableList: newList
        }));
    };

    const onClickSubmit = (e) => {
        api.post('/api/content/update', sharableContent, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setSubmitModal(true);
        });
    };

    const submitModalContent = {
        title: 'Information',
        text: 'Successfully Updated!'
    }

    const onClickSubmitModalSubmit = () => {
        setSubmitModal(false);
        navigate('/admin');
    };

    const fetchSharableList = () => {
        const sampleRequestBody = {

        };
        api.post('/api/content/list', sampleRequestBody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            setSharableContent(response.data);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    useEffect(() => {
        fetchSharableList();
    }, []);

    return (
        <div>
            <div className='my-3 p-3 bg-white rounded box-shadow'>
                <h5 className='border-bottom border-grey pb-2 mb-0'>User Profile</h5>
                {
                    (!sharableContent || !sharableContent.userProfileSharable) ? <div className='p-3'><LoadingView /></div>
                    : <ContentLinkContainer title={"Profile Link"} sharable={sharableContent.userProfileSharable} onClickShareCallback={onClickShareProfile} />
                }
            </div>

            <div className='my-3 p-3 bg-white rounded box-shadow'>
                <h5 className='border-bottom border-grey pb-2 mb-0'>User App</h5>
                {
                    (!sharableContent) ? <div className='p-3'><LoadingView /></div>
                    : ((!sharableContent.userAppSharableList) ? <div className='p-3'>No App to display</div>
                    : sharableContent.userAppSharableList.map(userAppSharable =>
                    <ContentLinkContainer title={userAppSharable.appId} sharable={userAppSharable} onClickShareCallback={onClickShareUserApp} />))
                }
            </div>

            <div className='my-3 p-3 bg-white rounded box-shadow'>
                <h5 className='border-bottom border-grey pb-2 mb-0'>User Blog</h5>
                {
                    (!sharableContent) ? <div className='p-3'><LoadingView /></div>
                    : ((!sharableContent.userBlogSharableList) ? <div className='p-3'>No Blog to display</div>
                    : sharableContent.userBlogSharableList.map(userBlogSharable =>
                    <ContentLinkContainer title={userBlogSharable.blogId} sharable={userBlogSharable} onClickShareCallback={onClickShareUserBlog} />))
                }
            </div>

            <div className='admin-form-button'>
                <button type='submit' className='btn btn-primary admin-button' onClick={onClickSubmit}>Submit</button>
            </div>
            <ModalView visible={submitModal} modalContent={submitModalContent} onClickSubmit={onClickSubmitModalSubmit} />
        </div>
    )
};
export default SharableContainer;

import React, { useState, useEffect } from 'react';
import api from '../../module/Api';
import ContentLinkContainer from '../../components/admin/ContentLinkContainer';
import LoadingView from '../../components/LoadingView';
import '../../styles/AdminPage.css';

const SharableContainer = () => {
    const [sharableContent, setSharableContent] = useState(null);

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

    const onClickSubmit = (e) => {
        console.log(sharableContent);
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
        });
    };

    const fetchSharableList = () => {
        console.log("Fetch Sharable List");
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
                    (!sharableContent || !sharableContent.userAppSharableList) ? <div className='p-3'><LoadingView /></div>
                    : sharableContent.userAppSharableList.map(userAppSharable =>
                    <ContentLinkContainer title={userAppSharable.appId} sharable={userAppSharable} onClickShareCallback={onClickShareUserApp} />)
                }
            </div>

            <div className='admin-form-button'>
                <button type='submit' className='btn btn-primary admin-button' onClick={onClickSubmit}>Submit</button>
            </div>
        </div>
    )
};
export default SharableContainer;

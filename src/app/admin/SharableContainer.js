import React, { useState, useEffect } from 'react';
import api from '../../module/Api';
import ContentLinkContainer from '../../components/admin/ContentLinkContainer';
import LoadingView from '../../components/LoadingView';
import '../../styles/AdminPage.css';

const SharableContainer = () => {
    const [userProfileSharable, setUserProfileSharable] = useState(null);
    const [userAppSharableList, setUserAppSharableList] = useState(null);

    const onClickShareProfile = (contentId) => {
        console.log(contentId);
    };

    const onClickShareUserApp = (contentId) => {
        console.log(contentId);
    };

    const onClickSubmit = (e) => {
        console.log("On Click Submit");
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
            setUserProfileSharable(response.data.userProfileSharable);
            setUserAppSharableList(response.data.userAppSharableList);
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
                    !userProfileSharable ? <div className='p-3'><LoadingView /></div>
                    : <ContentLinkContainer title={"Profile Link"} sharable={userProfileSharable} onClickShareCallback={onClickShareProfile} />
                }
            </div>

            <div className='my-3 p-3 bg-white rounded box-shadow'>
                <h5 className='border-bottom border-grey pb-2 mb-0'>User App</h5>
                {
                    !userAppSharableList ? <div className='p-3'><LoadingView /></div>
                    : userAppSharableList.map(userAppSharable =>
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

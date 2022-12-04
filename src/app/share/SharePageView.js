import React, { useState, useEffect } from 'react';
import axios from "axios";
import LoadingView from '../../components/LoadingView';

const SharePageView = () => {
    const [contentId, setContentId] = useState(window.location.pathname.substr(window.location.pathname.lastIndexOf('/')).substring(1));
    const [content, setContent] = useState(null);

    const onClickLink = (id) => {
        window.location.href='/';
    };

    const fetchContentUrl = async () => {
        const response = await axios.get(process.env.REACT_APP_ROUTE_API_URL + '/content/' + contentId);
        console.log(response.data);
        setContent(response.data);
    };

    useEffect(() => {
        console.log(contentId);
        fetchContentUrl();
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
                    content.contentUrl
                }
            </div>
        </div>
    )
};
export default SharePageView;

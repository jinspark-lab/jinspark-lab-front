import React, { useState, useEffect } from 'react';
import api from '../../module/Api';

const SharePageView = () => {
    const [menu, setMenu] = useState(0);
    const [content, setContent] = useState(null);

    const onClickLink = (id) => {
        window.location.href='/';
    };

    const fetchContentUrl = async () => {
        const response = await api.get(process.env.REACT_APP_API_URL + '/content/' + window.location.pathname);
        // const contentResponse = await.api.post(response.data.contentUrl)
        setContent(response.data);
    };

    useEffect(() => {
        // fetchContentUrl();
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
                External content
            </div>
        </div>
    )
};
export default SharePageView;

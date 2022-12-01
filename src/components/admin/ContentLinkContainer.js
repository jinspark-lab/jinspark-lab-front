import React, { useState, useEffect } from 'react';
import '../../styles/AdminPage.css';

const ContentLinkContainer = ({ title, sharable, onClickShareCallback }) => {
    const onClickShareContent = (e) => {
        onClickShareCallback(sharable.contentId);
    };

    useEffect(() => {

    }, []);

    return (
        <div className='admin-page'>
            <div className='text-muted pt-3 row'>
                <div className='col-10'>
                    <p className='pb-3 mb-0 small lh-125 border-bottom border-grey'>{title}</p>
                </div>
                <div className='col-2'>
                    <div className='form-check form-switch'>
                        <input className="form-check-input" type="checkbox" id="userProfileSharableCheck" onClick={onClickShareContent} checked={sharable.shared} />
                        <label className="form-check-label" for="userProfileSharableCheck">Share</label>
                    </div>
                </div>
            </div>
            <div>
                <div className='row p-2 admin-code-box'>
                    <div className='col-10'>
                        <code className='admin-code-font'>
                        {
                            sharable.shared ? sharable.contentLink : "-"
                        }
                        </code>
                    </div>
                    <div className='col-2'>
                        <button type="button" className="btn btn-outline-primary btn-sm">Copy Link</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContentLinkContainer;

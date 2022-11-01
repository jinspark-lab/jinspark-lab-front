import React from 'react';

const AppCardDetail = ({ userAppDetail }) => {
    return (
        <div>
            <div className='row'>
                <div className='col-9'>
                <h4 className='p-2 mb-1'>
                {userAppDetail.appId}
                </h4>
                </div>
                <div className='col-3 p-2'>
                <button className='userapp-nav-btn btn btn-primary'>
                Go to Project Repo
                </button>
                </div>
            </div>
            <div className='row p-3'>
                {userAppDetail.appLink}
            </div>
            <hr />
            <div className='row'>
                <h5 className='p-2'>Overview</h5>
                <img src={userAppDetail.appPicture} className='img-fluid p-2'></img>
                <p className='font-monospace p-2'>
                {userAppDetail.introText}
                </p>
            </div>
            <div className='row'>
                <h5 className='p-2'>Design</h5>
                <img src={userAppDetail.architectureUrl} className='img-fluid p-2'></img>
                <p className='font-monospace p-2'>
                {userAppDetail.description}
                </p>
            </div>
        </div>
    );
};

export default AppCardDetail;

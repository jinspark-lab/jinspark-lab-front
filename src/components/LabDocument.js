import React from 'react';
import '../styles/LabDocument.css';

// Single Item represent text
const LabDocument = ({ userLab }) => {

    return (
        <div className='lab-document'>
            <div className='lab-title'>{userLab.labTitle}</div>
            <br></br>
            <div>
                <img src={userLab.pictureUrl} className='img-fluid'></img>
            </div>
            <div className='lab-description'>
                <p className='font-monospace'>
                {userLab.description}
                </p>
            </div>
            <div>
                <button className='btn btn-primary'>
                    Click to Repository
                    {/* {userLab.linkUrl} */}
                </button>
            </div>
        </div>
    );
};

export default LabDocument;
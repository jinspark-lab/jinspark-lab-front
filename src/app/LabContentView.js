import React from 'react';
import LabDocument from '../components/LabDocument';

const LabContentView = ({ userLab }) => {

    return (
        <div>
            <div>
                <h4>
                About this Lab
                </h4>
            </div>
            <hr></hr>
            <div>
                {
                    userLab.userLabList.map(userLab => 
                        <LabDocument key={userLab.labId} userLab={userLab} />
                    )
                }
            </div>
        </div>
    )
};
export default LabContentView;
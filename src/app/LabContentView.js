import React from 'react';

const LabContentView = ({labInfo}) => {
    return (
        <div className="card mb-3">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">This is Card Description</p>
                <p className="card-text"><small className="text-muted">Last Updated</small></p>
            </div>
        </div>
    )
};
export default LabContentView;
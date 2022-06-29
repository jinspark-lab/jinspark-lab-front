import React from 'react';

// Single Item represent text
const LoadingView = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
        </div>
    );
};

export default LoadingView;
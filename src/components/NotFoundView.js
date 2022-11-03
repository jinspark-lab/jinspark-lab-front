import React from 'react';
import { useNavigate } from "react-router-dom";

// Single Item represent text
const NotFoundView = () => {
    const navigate = useNavigate();

    const onClickHome = () => {
        navigate('/');
    };

    return (
        <div class="d-flex align-items-center justify-content-center vh-50">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <button type='button' className='btn btn-primary' onClick={onClickHome}>Home</button>
            </div>
        </div>
    );
};

export default NotFoundView;

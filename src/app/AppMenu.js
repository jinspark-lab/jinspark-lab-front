import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AppMenu = () => {
    const authenticated = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        return true;
    };

    const adminAvailable = () => {
        const token = sessionStorage.getItem('token');
        const decoded = jwt_decode(token);
        if (decoded.role.includes('HOST') || decoded.role.includes('ADMIN')) {
            return true;
        }
        return false;
    };

    useEffect(() => {
    }, []);

    return (
        <div className='container'>
        {
            !authenticated() ? <div></div> :
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className='col-2'>
                    <Link to="/" className='navbar-brand' >
                        JinsparkLab
                    </Link>
                </div>
                <div className='col-6' >
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav '>
                            <li className='navbar-item'>
                                <Link to="/" className='nav-link active'>
                                    <h5 style={{'font-family': 'gill sans !important'}}>Home</h5>
                                </Link>
                            </li>
                            <li className='navbar-item'>
                                <Link to="/userapp" className='nav-link active'>
                                    <h5 style={{'font-family': 'gill sans !important'}}>UserApp</h5>
                                </Link>
                            </li>
                            {
                                adminAvailable() ?
                                <li className='navbar-item'>
                                    <Link to='/admin' className='nav-link'>
                                        <h5 style={{'font-family': 'gill sans !important'}}>Admin</h5>
                                    </Link>
                                </li> :
                                <li></li>
                            }
                        </ul>
                    </div>
                </div>
                <div className='col-4'>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        }
        </div>
    )
};
export default AppMenu;

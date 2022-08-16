import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AppMenu = () => {

    const adminAvailable = () => {
        const token = sessionStorage.getItem('token');
        const decoded = jwt_decode(token);
        if (decoded.role.includes('HOST') || decoded.role.includes('ADMIN')) {
            return true;
        }
        return false;
    }

    return (
        <div className='container'>
            <div className='col-2'>
                <Link to="/" className='navbar-brand'>JinsparkLab</Link>
            </div>
            <div className='col-6'>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav'>
                        <li className='navbar-item'>
                            <Link to="/" className='nav-link active'>Home</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to="/service" className='nav-link active'>Service</Link>
                        </li>
                        {
                            adminAvailable() ? 
                            <li className='navbar-item'>
                                <Link to='/admin' className='nav-link'>Admin</Link>
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
        </div>
    )
};
export default AppMenu;
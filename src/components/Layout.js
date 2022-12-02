import React from 'react';
import '../styles/LayoutContent.css';

const Layout = ({ pageMenu, pageRouter }) => {
    return (
        <div className='container-lg'>
            <div className='row'>
                { pageMenu }
            </div>
            <div className='layout-content row'>
                { pageRouter }
            </div>
            <div className="layout-bottom row">
            <hr />
                <center>JinsparkLab (https://github.com/jinspark-lab/jinspark-lab) </center>
            </div>
        </div>
    )
};
export default Layout;

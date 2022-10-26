import React from 'react';
import ItemListContainer from '../../components/common/ItemListContainer';
import '../../styles/UserAppPage.css';

const UserAppContentView = () => {

    const onClickMenu = (id) => {
        console.log("On Click Item : " + id);
        // setContent(null);
        // setMenu(id);
        if (id === 0) {
            // fetchProfile();
        } else {
            // fetchLab();
        }
    };

    return (
        <div className='userapp-page row'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-9'>
                    <h4 className='p-2 mb-1'>
                    App Name
                    </h4>
                    </div>
                    <div className='col-3 p-2'>
                    <button className='userapp-nav-btn btn btn-primary'>
                    Go to Project Repo
                    </button>
                    </div>
                </div>
                <div className='row p-3'>
                    App View
                </div>
                <hr />
                <div className='row'>
                    <h5 className='p-2'>Overview</h5>
                    <img src='https://d26rx9t37cawwe.cloudfront.net/lab_arch.png' className='img-fluid p-2'></img>
                    <p className='font-monospace p-2'>
                    IntroText
                    </p>
                </div>
                <div className='row'>
                    <h5 className='p-2'>Design</h5>
                    <img src='https://d26rx9t37cawwe.cloudfront.net/lab_arch.png' className='img-fluid p-2'></img>
                    <p className='font-monospace p-2'>
                    Description
                    </p>
                </div>
            </div>
        </div>
    )
};
export default UserAppContentView;

import React from 'react';
import ItemListContainer from '../../components/common/ItemListContainer';

const ServicePage = () => {

    const items = [
        {
            id: 0,
            text: 'First Service'
        },
        {
            id: 1,
            text: 'Second Service'
        }
    ];

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
        <div className='row'>
            <div className='col-3'>
                <ItemListContainer inputItems={items} onClickHandler={onClickMenu}></ItemListContainer>
            </div>
            <div className='col-9'>
                Service Page
            </div>
        </div>
    )
};
export default ServicePage;

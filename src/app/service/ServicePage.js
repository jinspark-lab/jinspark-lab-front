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

    return (
        <div className='row'>
            <div className='col-3'>
                <ItemListContainer inputItems={items}></ItemListContainer>
            </div>
            <div className='col-9'>
                Service Page
            </div>
        </div>
    )
};
export default ServicePage;
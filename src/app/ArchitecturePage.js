import React from 'react';
import ItemListContainer from '../components/ItemListContainer';

// TBD
const ArchitecturePage = () => {

    const items = [
        {
            id: 0,
            text: 'First Menu'
        },
        {
            id: 1,
            text: 'Second Menu'
        }
    ];

    return (
        <div className='row'>
            <div className='col-3'>
                <ItemListContainer inputItems={items}></ItemListContainer>
            </div>
            <div className='col-9'>
            ArchitecturePage
            </div>
        </div>
    )
};
export default ArchitecturePage;
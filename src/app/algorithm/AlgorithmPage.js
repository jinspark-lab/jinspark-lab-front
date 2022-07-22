import React from 'react';
import ItemListContainer from '../../components/common/ItemListContainer';
import AlgorithmContentView from './AlgorithmContentView';

// TBD
const AlgorithmPage = () => {

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
                <AlgorithmContentView></AlgorithmContentView>
            </div>
        </div>
    )
};
export default AlgorithmPage;
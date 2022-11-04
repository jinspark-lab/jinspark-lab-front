import React from 'react';
import api from '../../module/Api';

const FileUploadContainer = ({ id, value, onValueChanged, onDelete }) => {
    // Value is only used for validating. Do not map Value into input type="file" Tag.
    return (
        <div className='row'>
            <div className='col-10'>
                <input type='file' className='form-control' id={id}
                onChange={onValueChanged}
                disabled={value !== '' ? true : false} />
            </div>
            <div className='col-2'>
                <button className='btn btn-danger' onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default FileUploadContainer;

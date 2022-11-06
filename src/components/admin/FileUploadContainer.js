import React from 'react';
import api from '../../module/Api';

const FileUploadContainer = ({ id, value, onValueChanged, onDelete }) => {
    // Value is only used for validating. Do not map Value into input type="file" Tag.

    const fileUploadHandler = (e) => {
        if (!e.target.value) {
            return ;
        }
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        api.post('/api/resource/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((result) => {
            onValueChanged(result.data.objectPath);
        }).catch((error) => {
            console.log(error);
        });
    };

    const fileDeleteHandler = () => {
        if (!value) {
            return ;
        }
        api.post('/api/resource/delete' + '?objectPath=' + value)
        .then((result) => {
            onDelete();
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='row'>
            <div className='col-10'>
                <input type='file' className='form-control' id={id}
                onChange={fileUploadHandler}
                disabled={value !== '' ? true : false} />
            </div>
            <div className='col-2'>
                <button className='btn btn-danger' onClick={fileDeleteHandler}>Delete</button>
            </div>
        </div>
    );
};

export default FileUploadContainer;

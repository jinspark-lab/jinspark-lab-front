import React from 'react';
import MarkdownEditor from '../../components/MarkdownEditor';
import '../../styles/AdminPage.css';

const AddUserBlogView = ({ blogId, title, titleHandler, content, contentHandler, onClickSubmit, onClickCancel }) => {
    return (
        <div>
            <div className='admin-page'>
                <div className='row form-group admin-form'>
                    <div className='col-1'>
                        <label className='form-label' htmlFor='blogId'>Blog ID</label>
                    </div>
                    <div className='col-11'>
                        <input className='form-control' type='text' value={blogId} readOnly />
                    </div>
                </div>
                <div className='row form-group admin-form'>
                    <div className='col-1'>
                    <label className='form-label' htmlFor='blogTitle'>Title</label>
                    </div>
                    <div className='col-11'>
                    <input className='form-control' type='text' value={title} onChange={titleHandler} />
                    </div>
                </div>
                <MarkdownEditor value={content} setValue={contentHandler} />
                <div className='admin-form-button'>
                    <button type='submit' className='btn btn-primary admin-button' onClick={onClickSubmit}>Submit</button>
                    <button type='button' className='btn btn-outline-dark admin-button' onClick={onClickCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
};
export default AddUserBlogView;

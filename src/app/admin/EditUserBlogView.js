import React from 'react';
import MarkdownEditor from '../../components/MarkdownEditor';
import '../../styles/AdminPage.css';

const EditUserBlogView = ({ content, handlers }) => {
    return (
        <div>
            <div className='admin-page'>
                <div className='row form-group admin-form'>
                    <div className='col-1'>
                        <label className='form-label' htmlFor='blogId'>Blog ID</label>
                    </div>
                    <div className='col-11'>
                        <input className='form-control' type='text' value={content.blogId} readOnly />
                    </div>
                </div>
                <div className='row form-group admin-form'>
                    <div className='col-1'>
                    <label className='form-label' htmlFor='blogTitle'>Title</label>
                    </div>
                    <div className='col-11'>
                    <input className='form-control' type='text' value={content.title} onChange={handlers.handleTitle} />
                    </div>
                </div>
                <MarkdownEditor value={content.content} setValue={handlers.handleContent} />
                <div className='admin-form-button'>
                    <button type='submit' className='btn btn-primary admin-button' onClick={handlers.onClickSubmit}>Submit</button>
                    <button type='button' className='btn btn-danger admin-button' onClick={handlers.onClickRemove}>Remove</button>
                    <button type='button' className='btn btn-outline-dark admin-button' onClick={handlers.onClickCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
};
export default EditUserBlogView;

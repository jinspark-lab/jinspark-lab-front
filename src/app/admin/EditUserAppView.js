import React from 'react';

const EditUserAppView = ({ content, handlers }) => {
    return (
        <div>
            <div>
                EditUserAppView
            </div>
            <div className='admin-page'>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='appId'>App Name</label>
                        <input type='text' className='form-control' id='appId'
                        value={content.appId} onChange={handlers.handleAppName}
                        />
                    </div>
                    {/* TODO: Make Image upload */}
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='repoLink'>Repository Link</label>
                        <input type='text' className='form-control' id='repoLink'
                        value={content.repoLink} onChange={handlers.handleRepoLink} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='introText'>Introduction</label>
                        <textarea className='form-control' id='introText' rows='3'
                        value={content.introText} onChange={handlers.handleIntroText} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='appLink'>Application Link</label>
                        <input type='text' className='form-control' id='appLink'
                        value={content.appLink} onChange={handlers.handleAppLink} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='appPicture'>Application Picture</label>
                        <input type='text' className='form-control' id='appPicture'
                        value={content.appPicture} onChange={handlers.handleAppPicture} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='architectureUrl'>Architecture Link</label>
                        <input type='text' className='form-control' id='architectureUrl'
                        value={content.architectureUrl} onChange={handlers.handleArchitectureUrl} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='description'>Description</label>
                        <textarea className='form-control' id='description' rows='9'
                        value={content.description} onChange={handlers.handleDescription} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='thumbnailUrl'>Thumbnail URL</label>
                        <input type='text' className='form-control' id='thumbnailUrl'
                        value={content.thumbnailUrl} onChange={handlers.handleThumbnailUrl} />
                    </div>

                    <div className='admin-form-button'>
                        <button type='button' className='btn btn-primary admin-button' onClick={handlers.onClickSubmit}>Submit</button>
                        <button type='button' className='btn btn-danger admin-button' onClick={handlers.onClickRemove}>Remove</button>
                        <button type='button' className='btn btn-outline-dark admin-button' onClick={handlers.onClickCancel}>Cancel</button>
                    </div>
            </div>
        </div>
    )
};
export default EditUserAppView;

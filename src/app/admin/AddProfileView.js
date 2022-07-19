import React from 'react';
import '../../styles/AdminPage.css';

// Add New Profile (Only calls after SignUp / Account Page)
const AddProfileView = () => {
    return (
        <div>
            <div>
            AddProfileView
            </div>
            <div className='admin-page'>
                <form>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userName'>Your Name</label>
                        <input type='text' className='form-control' id='userName' placeholder='MyName' />
                    </div>
                    {/* TODO: Make Image upload */}
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userImage'>Your Image</label>
                        <input type='text' className='form-control' id='userImage' placeholder='http://example.com/image.png' />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userTitle'>Your Headline</label>
                        <input type='text' className='form-control' id='userTitle' placeholder='Software Engineer' />
                    </div>
                    <div className='form-group'>
                        <label className='admin-label' htmlFor='userDesc'>Introduction</label>
                        <textarea className='form-control' id='userDesc' rows='4'>
                        </textarea>
                    </div>

                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userLinkedin'>LinkedIn Profile</label>
                        <input type='text' className='form-control' id='userLinkedin' placeholder='https://www.linkedin.com/in/jinsung-park-6b459370/' />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userEmail'>Your Email</label>
                        <input type='email' className='form-control' id='userEmail' placeholder='my@profile.com' />
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>

                    <div className='admin-form-button'>
                        <button type='submit' className='btn btn-primary admin-button'>Submit</button>
                        <button type='button' className='btn btn-outline-dark admin-button'>Cancel</button>
                    </div>
                </form>
            </div>

        </div>
    )
};
export default AddProfileView;
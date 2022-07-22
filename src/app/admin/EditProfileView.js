import React from 'react';
import CareerBoxInput from '../../components/admin/CareerBoxInput';
import SkillBadgeInput from '../../components/admin/SkillBadgeInput';
import LoadingView from '../../components/LoadingView';
import '../../styles/AdminPage.css';

const EditProfileView = ({ content, refresh, handlers }) => {
    if (refresh) {
        return <LoadingView></LoadingView>
    }
    return (
        <div>
            <div>
                EditProfileView
            </div>
            <div className='admin-page'>
                <form>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userName'>Your Name</label>
                        <input type='text' className='form-control' id='userName' 
                        value={content.name} onChange={handlers.handleName} />
                    </div>
                    {/* TODO: Make Image upload */}
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userImage'>Your Image</label>
                        <input type='text' className='form-control' id='userImage' 
                        value={content.pictureUrl} onChange={handlers.handlePictureUrl} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userTitle'>Your Headline</label>
                        <input type='text' className='form-control' id='userTitle' 
                        value={content.title} onChange={handlers.handleTitle} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userDesc'>Introduction</label>
                        <textarea className='form-control' id='userDesc' rows='4'
                        value={content.description} onChange={handlers.handleDescription} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userLinkedin'>LinkedIn Profile</label>
                        <input type='text' className='form-control' id='userLinkedin'
                        value={content.linkedinUrl} onChange={handlers.handleLinkedinUrl} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userEmail'>Your Email</label>
                        <input type='email' className='form-control' id='userEmail' 
                        value={content.contactEmail} onChange={handlers.handleContactEmail}/>
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label'>Your Skills</label>
                        {
                            content.userSkillList.map(userSkill=> 
                                <SkillBadgeInput key={userSkill.skillId} skillId={userSkill.skillId}
                                    userSkill={userSkill} onChange={handlers.onChangeSkillBadge} onDelete={handlers.onDeleteSkillBadge} />
                            )
                        }
                        <div>
                            <button className='btn btn-success' onClick={handlers.onAddSkillBadge}>Add Skill</button>
                        </div>
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label'>Your Careers</label>
                        {
                            content.userCareerList.map(userCareer=>
                                <CareerBoxInput key={userCareer.careerId} careerId={userCareer.careerId}
                                userCareer={userCareer}
                                onChange={handlers.onChangeCareerBox} onDelete={handlers.onDeleteCareerBox}/>
                                )
                        }
                        <div>
                            <button className='btn btn-success' onClick={handlers.onAddCareerBox}>Add Career</button>
                        </div>
                    </div>

                    <div className='admin-form-button'>
                        <button type='submit' className='btn btn-primary admin-button' onClick={handlers.onClickSubmit}>Submit</button>
                        <button type='button' className='btn btn-outline-dark admin-button'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default EditProfileView;
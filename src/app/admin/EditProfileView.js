import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CareerBoxInput from '../../components/admin/CareerBoxInput';
import SkillBadgeInput from '../../components/admin/SkillBadgeInput';
import LoadingView from '../../components/LoadingView';
import '../../styles/AdminPage.css';

const EditProfileView = () => {
    const [content, setContent] = useState(null);
    const [refresh, setRefresh] = useState(true);

    const fetchProfile = async () => {
        try {
            const response = await axios.post('http://localhost:8080/profile/admin', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setContent(response.data);
            setRefresh(false);
        } catch (e) {
            console.log(e);
        }
    };

    const handleName = (e) => {
        setContent(prevState => ({
            ...prevState,
            name: e.target.value
        }));
    };
    const handleTitle = (e) => {
        setContent(prevState => ({
            ...prevState,
            title: e.target.value
        }));
    };
    const handlePictureUrl = (e) => {
        setContent(prevState => ({
            ...prevState,
            pictureUrl: e.target.value
        }));
    };
    const handleDescription = (e) => {
        setContent(prevState => ({
            ...prevState,
            description: e.target.value
        }));
    };
    const handleLinkedinUrl = (e) => {
        setContent(prevState => ({
            ...prevState,
            linkedinUrl: e.target.value
        }));
    };
    const handleContactEmail = (e) => {
        setContent(prevState => ({
            ...prevState,
            contactEmail: e.target.value
        }));
    };

    const onAddSkillBadge = (e) => {
        e.preventDefault();             //Prevent page reloading
        const newSkillId = Math.max(...content.userSkillList.map(userSkill=>userSkill.skillId)) + 1;
        const newSkillBadge = {
            skillId: newSkillId,
            userId: content.userId,
            skillName: '',
            experience: 1,
            proficiency: 1
        };
        setContent(prevState => ({
            ...prevState,
            userSkillList: [...content.userSkillList, newSkillBadge]
        }));
    };
    const onChangeSkillBadge = (e) => {
        setContent(prevState => ({
            ...prevState,
            userSkillList: content.userSkillList.map(userSkill => userSkill.skillId == e.skillId ? e : userSkill)
        }));
    };
    const onDeleteSkillBadge = (id) => {
        setContent(prevState => ({
            ...prevState,
            userSkillList: content.userSkillList.filter(userSkill=>userSkill.skillId != id)
        }));
    };
    const onAddCareerBox = (e) => {
        e.preventDefault();
        const newCareerId = Math.max(...content.userCareerList.map(userCareer=>userCareer.careerId)) + 1;
        const newCareerBox = {
            userId: content.userId,
            careerId: newCareerId,
            careerStart: new Date(),
            careerEnd: new Date(),
            company: "",
            description: "",
            jobTitle: "",
            userProjectList: []
        };
        setContent(prevState => ({
            ...prevState,
            userCareerList: [...content.userCareerList, newCareerBox]
        }));
    };
    const onChangeCareerBox = (e) => {
        setContent(prevState => ({
            ...prevState,
            userCareerList: content.userCareerList.map(userCareer => userCareer.careerId == e.careerId ? e : userCareer)
        }));
    };
    const onDeleteCareerBox = (id) => {
        setContent(prevState => ({
            ...prevState,
            userCareerList: content.userCareerList.filter(userCareer=>userCareer.careerId != id)
        }));
    };

    const onClickSubmit = () => {
        console.log("On click Submit");
        const userProfileRequest = {
            userProfile: {
                userId: content.userId,
                name: content.name,
                title: content.title,
                pictureUrl: content.pictureUrl,
                description: content.description,
                linkedinUrl: content.linkedinUrl,
                contactEmail: content.contactEmail
            },
            userSkillList: content.userSkillList,
            userCareerList: content.userCareerList
        };
        setRefresh(true);
        axios.post('http://localhost:8080/profile/update', userProfileRequest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            console.log("Set Refresh True ");
            setContent(null);
        });
    };

    // useEffect works as a componentDidMount()
    useEffect(() => {
        if (!content) {
            fetchProfile();
        }
    }, [content]);

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
                        value={content.name} onChange={handleName} />
                    </div>
                    {/* TODO: Make Image upload */}
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userImage'>Your Image</label>
                        <input type='text' className='form-control' id='userImage' 
                        value={content.pictureUrl} onChange={handlePictureUrl} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userTitle'>Your Headline</label>
                        <input type='text' className='form-control' id='userTitle' 
                        value={content.title} onChange={handleTitle} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userDesc'>Introduction</label>
                        <textarea className='form-control' id='userDesc' rows='4'
                        value={content.description} onChange={handleDescription} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userLinkedin'>LinkedIn Profile</label>
                        <input type='text' className='form-control' id='userLinkedin'
                        value={content.linkedinUrl} onChange={handleLinkedinUrl} />
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label' htmlFor='userEmail'>Your Email</label>
                        <input type='email' className='form-control' id='userEmail' 
                        value={content.contactEmail} onChange={handleContactEmail}/>
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label'>Your Skills</label>
                        {
                            content.userSkillList.map(userSkill=> 
                                <SkillBadgeInput key={userSkill.skillId} skillId={userSkill.skillId}
                                    userSkill={userSkill} onChange={onChangeSkillBadge} onDelete={onDeleteSkillBadge} />
                            )
                        }
                        <div>
                            <button className='btn btn-success' onClick={onAddSkillBadge}>Add Skill</button>
                        </div>
                    </div>
                    <div className='form-group admin-form'>
                        <label className='admin-label'>Your Careers</label>
                        {
                            content.userCareerList.map(userCareer=>
                                <CareerBoxInput key={userCareer.careerId} careerId={userCareer.careerId}
                                userCareer={userCareer}
                                onChange={onChangeCareerBox} onDelete={onDeleteCareerBox}/>
                                )
                        }
                        <div>
                            <button className='btn btn-success' onClick={onAddCareerBox}>Add Career</button>
                        </div>
                    </div>

                    <div className='admin-form-button'>
                        <button type='submit' className='btn btn-primary admin-button' onClick={onClickSubmit}>Submit</button>
                        <button type='button' className='btn btn-outline-dark admin-button'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default EditProfileView;
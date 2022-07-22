import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditProfileView from './EditProfileView';

const EditProfileContainer = () => {
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
            userSkillList: content.userSkillList.map(userSkill => userSkill.skillId === e.skillId ? e : userSkill)
        }));
    };
    const onDeleteSkillBadge = (id) => {
        setContent(prevState => ({
            ...prevState,
            userSkillList: content.userSkillList.filter(userSkill=>userSkill.skillId !== id)
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
            userCareerList: content.userCareerList.map(userCareer => userCareer.careerId === e.careerId ? e : userCareer)
        }));
    };
    const onDeleteCareerBox = (id) => {
        setContent(prevState => ({
            ...prevState,
            userCareerList: content.userCareerList.filter(userCareer=>userCareer.careerId !== id)
        }));
    };

    const onClickSubmit = () => {
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

    const handlers = {
        handleName,
        handleTitle,
        handlePictureUrl,
        handleDescription,
        handleLinkedinUrl,
        handleContactEmail,
        onAddSkillBadge,
        onChangeSkillBadge,
        onDeleteSkillBadge,
        onAddCareerBox,
        onChangeCareerBox,
        onDeleteCareerBox,
        onClickSubmit
    };

    // useEffect works as a componentDidMount()
    useEffect(() => {
        if (!content) {
            fetchProfile();
        }
    }, [content]);

    return (
        <EditProfileView content={content} refresh={refresh} handlers={handlers}></EditProfileView>
    )
};
export default EditProfileContainer;
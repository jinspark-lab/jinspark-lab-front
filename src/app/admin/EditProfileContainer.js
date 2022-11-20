import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import EditProfileView from './EditProfileView';
import ModalView from '../../components/ModalView';

const EditProfileContainer = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [submitModal, setSubmitModal] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState(null);

    const fetchProfile = async () => {
        try {
            // const token = sessionStorage.getItem('token');
            // const decoded = jwt_decode(token);
            // const userId = decoded.userId;
            const response = await api.post('/api/profile', {
            });
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
            userId: content.userId,
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
        api.post('/api/profile/update', userProfileRequest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            console.log(response);
            setSubmitModal(true);
            setCancelModal(false);
            setErrorModal(false);
        }).catch(error => {
            console.error(error);
            setContent(null);
            setErrorModalMessage(error.response.data.message);
            setErrorModal(true);
        }).finally(() => {
        });
    };

    const onClickCancel = () => {
        console.log("Cancel");
        setSubmitModal(false);
        setCancelModal(true);
        setErrorModal(false);
    };

    const submitModalContent = {
        title: 'Information',
        text: 'Profile Successfully Updated!'
    };

    const onClickSubmitModalSubmit = () => {
        setSubmitModal(false);
        navigate('/');
    };

    const cancelModalContent = {
        title: 'Alert',
        text: 'Unsaved data will be disappeared.'
    };

    const onClickCancelModalSubmit = () => {
        setCancelModal(false);
        navigate('/');
    };

    const onClickCancelModalCancel = () => {
        setCancelModal(false);
    };

    const errorModalContent = {
        title: 'Error',
        text: errorModalMessage
    };

    const onClickErrorModalSubmit = () => {
        setErrorModal(false);
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
        onClickSubmit,
        onClickCancel
    };

    // useEffect works as a componentDidMount()
    useEffect(() => {
        if (!content) {
            fetchProfile();
        }
    }, [content]);

    return (
        <div>
            <EditProfileView content={content} refresh={refresh} handlers={handlers}></EditProfileView>
            <ModalView visible={submitModal} modalContent={submitModalContent} onClickSubmit={onClickSubmitModalSubmit} />
            <ModalView visible={cancelModal} modalContent={cancelModalContent} onClickSubmit={onClickCancelModalSubmit} onClickCancel={onClickCancelModalCancel} />
            <ModalView visible={errorModal} modalContent={errorModalContent} onClickSubmit={onClickErrorModalSubmit} />
        </div>
    )
};
export default EditProfileContainer;

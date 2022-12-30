import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import EditUserBlogView from './EditUserBlogView';
import LoadingView from '../../components/LoadingView';
import ModalView from '../../components/ModalView';

const EditUserBlogContainer = ({blogId}) => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [submitModal, setSubmitModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);

    const fetchUserBlog = async () => {
        try {
            const response = await api.post('/api/userblog/content/' + blogId, {
            });
            setContent(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleTitle = (e) => {
        setContent(prevState => ({
            ...prevState,
            title: e.target.value
        }));
    };

    const handleContent = (v) => {
        setContent(prevState => ({
            ...prevState,
            content: v
        }));
    };

    const onClickSubmit = () => {
        const userblogRequest = {
            blogId: content.blogId,
            title: content.title,
            content: content.content
        };
        api.post('/api/userblog/record', userblogRequest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            //TODO: Make Additional Page to inform
            setSubmitModal(true);
            setDeleteModal(false);
            setCancelModal(false);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const onClickRemove = () => {
        setSubmitModal(false);
        setDeleteModal(true);
        setCancelModal(false);
    };

    const onClickCancel = () => {
        setSubmitModal(false);
        setDeleteModal(false);
        setCancelModal(true);
    };

    const submitModalContent = {
        title: 'Information',
        text: 'User Blog Successfully Updated!'
    }

    const onClickSubmitModalSubmit = () => {
        setSubmitModal(false);
        navigate('/userblog');
    };

    const deleteModalContent = {
        title: 'Warning',
        text: 'Content will be deleted.'
    };

    const onClickDeleteModalSubmit = () => {
        api.post('/api/userblog/delete/' + content.blogId,{
        }).then(response => {
            setDeleteModal(false);
            navigate('/userblog');
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const onClickDeleteModalCancel = () => {
        setDeleteModal(false);
    };

    const cancelModalContent = {
        title: 'Alert',
        text: 'Unsaved data will be disappeared.'
    };

    const onClickCancelModalSubmit = () => {
        setCancelModal(false);
        navigate('/userblog');
    };

    const onClickCancelModalCancel = () => {
        setCancelModal(false);
    };

    const handlers = {
        handleTitle,
        handleContent,
        onClickSubmit,
        onClickRemove,
        onClickCancel
    };

    useEffect(()=> {
        fetchUserBlog();
    }, []);

    return (
        <div>
            {
                !content ? <LoadingView />
                :
                <div>
                    <EditUserBlogView content={content} handlers={handlers}></EditUserBlogView>
                    <ModalView visible={submitModal} modalContent={submitModalContent} onClickSubmit={onClickSubmitModalSubmit} />
                    <ModalView visible={deleteModal} modalContent={deleteModalContent} onClickSubmit={onClickDeleteModalSubmit} onClickCancel={onClickDeleteModalCancel} />
                    <ModalView visible={cancelModal} modalContent={cancelModalContent} onClickSubmit={onClickCancelModalSubmit} onClickCancel={onClickCancelModalCancel} />
                </div>
            }
        </div>
    )
};
export default EditUserBlogContainer;

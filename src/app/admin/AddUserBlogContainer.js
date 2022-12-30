import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import AddUserBlogView from './AddUserBlogView';
import ModalView from '../../components/ModalView';

const AddUserBlogContainer = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [submitModal, setSubmitModal] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);

    const onClickSubmit = () => {
        const userBlog = {
            blogId: 0,
            title: title,
            content: content
        };
        api.post('/api/userblog/record', userBlog, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            //TODO: Make Additional Page to inform
            setSubmitModal(true);
            setCancelModal(false);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const onClickCancel = () => {
        console.log("Cancel");
        setSubmitModal(false);
        setCancelModal(true);
    };

    const submitModalContent = {
        title: 'Information',
        text: 'UserBlog Successfully Registered!'
    }

    const onClickSubmitModalSubmit = () => {
        setSubmitModal(false);
        navigate('/userblog');
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

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    useEffect(() => {

    }, []);

    return (
        <div>
            <AddUserBlogView blogId={0} title={title} titleHandler={onChangeTitle} content={content} contentHandler={setContent}
                            onClickSubmit={onClickSubmit} onClickCancel={onClickCancel}></AddUserBlogView>
            <ModalView visible={submitModal} modalContent={submitModalContent} onClickSubmit={onClickSubmitModalSubmit} />
            <ModalView visible={cancelModal} modalContent={cancelModalContent} onClickSubmit={onClickCancelModalSubmit} onClickCancel={onClickCancelModalCancel} />
        </div>
    )
};
export default AddUserBlogContainer;

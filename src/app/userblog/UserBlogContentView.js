import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../module/Api';
import LoadingView from '../../components/LoadingView';
import MarkdownView from '../../components/MarkdownView';

const UserBlogContentView = ({ userBlog }) => {
    const navigate = useNavigate();

    useEffect(()=> {
    }, []);

    return (
        <div>
            <MarkdownView markdown={userBlog.content} />
        </div>
    )
};
export default UserBlogContentView;

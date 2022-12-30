import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import UserBlogContentView from './UserBlogContentView';
import ItemListContainer from '../../components/common/ItemListContainer';
import LoadingView from '../../components/LoadingView';

const UserBlogPage = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(0);
    const [userBlogList, setUserBlogList] = useState(null);
    const [userBlog, setUserBlog] = useState(null);

    const onClickMenu = (id) => {
        fetchUserBlog(id);
    };

    const fetchUserBlog = (id) => {
        setMenu(id);
        api.post('/api/userblog/content/' + id, {}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            setUserBlog(response.data);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
        });
    };

    const fetchUserBlogList = async () => {
        const response = await api.post('/api/userblog/list', {
        });
        setUserBlogList(response.data.userBlogList);
        const firstBlog = response.data.userBlogList.reduce((a, b) => {
            return a.blogId < b.blogId ? a : b;
        });
        fetchUserBlog(firstBlog.blogId);
    };

    const renderContent = () => {
        if (!userBlog) {
            return <LoadingView />
        }
        return (
            <UserBlogContentView userBlog={userBlog} />
        )
    };

    useEffect(() => {
        fetchUserBlogList();
    }, []);

    return (
        <div>
            {
                !userBlogList ? <LoadingView /> :
                <div className = 'row'>
                    <div className='col-3'>
                        <ItemListContainer inputItems={userBlogList.map(userBlog => ({id: userBlog.blogId, text: userBlog.title}))}
                                        onClickHandler={onClickMenu}></ItemListContainer>
                    </div>
                    <div className='col-9'>
                        { renderContent() }
                    </div>
                </div>
            }
        </div>
    )
};
export default UserBlogPage;

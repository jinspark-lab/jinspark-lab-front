import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../module/Api';
import EditUserBlogContainer from './EditUserBlogContainer';
import ItemListContainer from '../../components/common/ItemListContainer';
import LoadingView from '../../components/LoadingView';

const EditUserBlogPage = () => {
    const navigate = useNavigate();
    const [userBlogList, setUserBlogList] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const onClickItem = (id) => {
        if (id == 0) {
            console.log("This blog is made for testing");
        }
        setSelectedBlog(id);
    };

    const renderBlogList = () => {
        if (!userBlogList) {
            return (
                <div>
                    <div className='container'>
                        <h3 className='jumbotron-heading p-2'>
                        User Blogs :)
                        </h3>
                    </div>
                    <div className='album bg-light'>
                        <LoadingView />
                    </div>
                </div>
            )
        } else if (userBlogList.length == 0) {
            return (
                <div className='container'>
                    <h3 className='jumbotron-heading p-2'>
                    User Blogs :)
                    </h3>
                    <div>There is no Blogs to edit.</div>
                </div>
            )
        }
        return (
            <div>
                <div className='container'>
                    <h3 className='jumbotron-heading p-2'>
                    User Blogs :)
                    </h3>
                </div>
                <div className='album bg-light'>
                    {
                        <ItemListContainer inputItems={userBlogList.map(userBlog => ({id: userBlog.blogId, text: userBlog.title}))}
                                        onClickHandler={onClickItem}></ItemListContainer>
                    }
                </div>
            </div>
        )
    };

    const renderBlogContainer = () => {
        return <EditUserBlogContainer blogId={selectedBlog} />
    };

    const fetchUserBlogList = async () => {
        const response = await api.post('/api/userblog/list', {
        });
        setUserBlogList(response.data.userBlogList);
    };

    useEffect(() => {
        fetchUserBlogList();
    }, [selectedBlog]);

    return (
        <div>
            {
                !selectedBlog ? renderBlogList()
                : renderBlogContainer()
            }
        </div>
    )
};
export default EditUserBlogPage;

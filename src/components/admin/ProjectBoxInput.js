import React, { useState, useEffect } from 'react';

// Single Item represent text
const ProjectBoxInput = ({ projectId, userProject, onChange, onDelete }) => {

    const [projectObject, setProjectObject] = useState({
        projectId: projectId,
        careerId: userProject.careerId,
        userId: userProject.userId,
        projectOrder: userProject.projectOrder,
        description: userProject.description
    });

    const handleOrder = (e) => {
        setProjectObject(prevState => ({
            ...prevState,
            projectOrder: parseInt(e.target.value)
        }));
    };
    const handleDescription = (e) => {
        setProjectObject(prevState => ({
            ...prevState,
            description: e.target.value
        }));
    };

    const deleteProject = (e) => {
        e.preventDefault();
        onDelete(projectId);
    };

    useEffect(()=> {
        onChange(projectObject);
    }, [projectObject]);

    return (
        <div className='admin-box row'>
            <div className='col-2'>
                <label className='admin-label' htmlFor='projectOrder'>Order</label>
                <input type='text' className='form-control' id='projectOrder' 
                value={projectObject.projectOrder} onChange={handleOrder} />
            </div>
            <div className='col-9'>
                <label className='admin-label' htmlFor='projectDesc'>Description</label>
                <input type='text' className='form-control' id='projectDesc' 
                value={projectObject.description} onChange={handleDescription} />
            </div>
            <div className='admin-element-btn col-1'>
                <button className='btn btn-danger' onClick={deleteProject}>X</button>
            </div>
        </div>
    );
};

export default ProjectBoxInput;
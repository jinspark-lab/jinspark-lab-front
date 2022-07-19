import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import ProjectBoxInput from './ProjectBoxInput';
import '../../styles/AdminPage.css';
import '../../styles/CareerBox.css';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

// Single Item represent text
const CareerBoxInput = ({ careerId, userCareer, onChange, onDelete }) => {
    const [careerObject, setCareerObject] = useState({
        careerId: careerId,
        userId: userCareer.userId,
        jobTitle: userCareer.jobTitle,
        company: userCareer.company,
        careerStart: (new Date(userCareer.careerStart)).valueOf(),
        careerEnd: !userCareer.careerEnd ? (new Date()).valueOf() : (new Date(userCareer.careerEnd)).valueOf(),
        description: userCareer.description,
        userProjectList: userCareer.userProjectList
    });
    const [currentJob, setCurrentJob] = useState(!userCareer.careerEnd);
    const [nextProjextId, setNextProjectId] = useState(Math.max(Math.max(...careerObject.userProjectList.map(project=>project.projectId)) + 1, 0));

    const handleJob = (e) => {
        setCareerObject(prevState => ({
            ...prevState,
            jobTitle: e.target.value
        }));
    };
    const handleCompany = (e) => {
        setCareerObject(prevState=> ({
            ...prevState,
            company: e.target.value
        }));
    };
    const handleStartDate = (newDate) => {
        setCareerObject(prevState=> ({
            ...prevState,
            careerStart: newDate.valueOf()
            // careerStart: new Date(newDate.getUTCFullYear() + "-" + newDate.getUTCMonth() + "-" + newDate.getUTCDate())
        }));
    };
    const handleEndDate = (newDate) => {
        setCareerObject(prevState=> ({
            ...prevState,
            careerEnd: newDate.valueOf()
            // careerEnd: new Date(newDate.getUTCFullYear() + "-" + newDate.getUTCMonth() + "-" + newDate.getUTCDate())
        }));
    };
    const handleDescription = (e) => {
        setCareerObject(prevState=> ({
            ...prevState,
            description: e.target.value
        }));
    };
    const handleCurrentJob = (e) => {
        setCurrentJob(e.target.checked);
    };

    const deleteCareer = (e) => {
        e.preventDefault();
        onDelete(careerId);
    };

    const addProject = (e) => {
        e.preventDefault();
        const newProjectBox = {
            userId: userCareer.userId,
            careerId: userCareer.careerId,
            projectId: nextProjextId,
            projectOrder: 0,
            description: ''
        };
        setCareerObject(prevState => ({
            ...prevState,
            userProjectList: [...careerObject.userProjectList, newProjectBox]
        }));
    };
    const changeProject = (e) => {
        setCareerObject(prevState => ({
            ...prevState,
            userProjectList: careerObject.userProjectList.map(userProject => userProject.projectId == e.projectId ? e : userProject)
        }));
    };
    const deleteProject = (id) => {
        setCareerObject(prevState => ({
            ...prevState,
            userProjectList: careerObject.userProjectList.filter(project=>project.projectId != id)
        }));
    };

    // monitor all objects. careerObject 가 변경되면 아래 코드가 실행
    useEffect(()=> {
        setNextProjectId(Math.max(Math.max(...careerObject.userProjectList.map(project=>project.projectId)) + 1, 0));
        onChange(careerObject);
    }, [careerObject]);

    return (
        <div className="career-box">
            <div className="row">
                <div className="col-6">
                    {/* <h5 className="career-text">{ jobTitle }</h5> */}
                    <label className='admin-label' htmlFor='jobTitle'>Job Title</label>
                    <input type='text' className='form-control' id='jobTitle'
                    value={careerObject.jobTitle} onChange={handleJob}/>
                </div>
                <div className="col-6">
                    <label className='admin-label' htmlFor='company'>Company</label>
                    <input type='text' className='form-control' id='company' 
                    value={careerObject.company} onChange={handleCompany}/>
                </div>
            </div>
            <div className="form-group row">
                <div className='col-6'>
                    <label className='admin-label' htmlFor='startDate'>StartDate</label>
                    <DatePicker className='form-control' dateFormat='yyyy/MM/dd'
                                selected={careerObject.careerStart} onChange={handleStartDate} />
                </div>
                <div className='col-6'>
                    <div className='form-check'>
                        <label className='admin-label' htmlFor='endDate'>EndDate / Current</label>
                        <input className='form-check-input' type='checkbox'
                        checked={currentJob} onChange={handleCurrentJob} id='currentJobCheckbox'></input>
                    </div>
                    {
                        currentJob === true ? 
                        <div>MyCurrentJob</div>
                        :
                        <DatePicker className='form-control' dateFormat='yyyy/MM/dd'
                                    selected={careerObject.careerEnd} onChange={handleEndDate} />
                    }
                </div>
            </div>
            <div className="form-group">
                <label className='admin-label' htmlFor='careerDesc'>Description</label>
                <textarea className='form-control' id='careerDesc' rows='4'
                value={careerObject.description} onChange={handleDescription}>
                </textarea>
            </div>
            <div className="row">
                <div className="col-2">
                    <div className='admin-label'>
                        <center>&#128214; Projects</center>
                    </div>
                    <div className='admin-element-btn'>
                        <button className='btn btn-success' onClick={addProject}>Add</button>
                    </div>
                </div>
                <div className="col-10">
                    {
                        careerObject.userProjectList.map(project => 
                            <ProjectBoxInput key={project.projectId} projectId={project.projectId}
                            userProject={project}
                            onChange={changeProject} onDelete={deleteProject} />
                            )
                    }
                </div>
            </div>
            <div>
                <button className='btn btn-danger' onClick={deleteCareer}>Delete Career</button>
            </div>
        </div>
    );
};

export default CareerBoxInput;
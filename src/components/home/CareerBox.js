import React from 'react';
import '../../styles/CareerBox.css';
import ProjectBox from './ProjectBox';

// Single Item represent text
const CareerBox = ({ jobTitle, company, desc, startDate, endDate, projectList }) => {
    return (
        <div className="career-box">
            <div className="row">
                <div className="col-6">
                    <h5 className="career-text">{ jobTitle }</h5>
                </div>
                <div className="col-6">
                    <h5 className="career-text">{ company }</h5>
                </div>
            </div>
            <div className="career-date">
                <p className="font-weight-light">
                { startDate } - { endDate === null ? "NOW" : endDate }
                </p>
            </div>
            <div className="career-text">
                <p>
                { desc }
                </p>
            </div>
            <div className="row">
                <div className="col-2">
                    <center>&#128214; Projects</center>
                </div>
                <div className="col-10">
                    {
                        projectList.map(project => 
                            <ProjectBox key={project.projectId} description={project.description} />
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default CareerBox;
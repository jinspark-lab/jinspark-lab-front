import React from 'react';
import '../../styles/ProjectBox.css';

// Single Item represent text
const ProjectBox = ({ description }) => {
    return (
        <div>
            <p><span>&#9989;&nbsp;</span>
            <strong>{ description }</strong></p>
        </div>
    );
};

export default ProjectBox;

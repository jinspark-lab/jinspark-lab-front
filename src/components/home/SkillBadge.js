import React from 'react';
import '../../styles/SkillBadge.css';

// Single Item represent text
const SkillBadge = ({ name, experience, proficiency }) => {
    return (
        <div className="skill-box">
            <button className="skill-badge">
                <span className="skill-name">
                {name}
                </span>
                <span className="skill-year">{experience} year</span>
                <span className="skill-proficiency">{proficiency}</span>
            </button>
        </div>
    );
};

export default SkillBadge;
import React from 'react';
import '../../styles/SkillBadge.css';

// Single Item represent text
const SkillBadge = ({ name, experience, proficiency }) => {
    const SKILL_PROFICIENCY_VALUE_MAP = {
        '1': 'BEGINNER',
        '2': 'GOOD',
        '3': 'ADVANCED',
        '4': 'PROFESSIONAL',
        '5': 'EXPERT'
    };

    return (
        <div className="skill-box">
            <button className="skill-badge">
                <span className="skill-name">
                {name}
                </span>
                <span className="skill-year">{experience} year</span>
                <span className="skill-proficiency">{SKILL_PROFICIENCY_VALUE_MAP[proficiency]}</span>
            </button>
        </div>
    );
};

export default SkillBadge;

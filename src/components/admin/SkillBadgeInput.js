import React, { useState, useEffect } from 'react';
import '../../styles/AdminPage.css';

// Single Item represent text
const SkillBadgeInput = ({ skillId, userSkill, onChange, onDelete }) => {
    const [skill, setSkill] = useState(userSkill);

    const SKILL_PROFICIENCY_VALUE_MAP = {
        '1': 'BEGINNER',
        '2': 'GOOD',
        '3': 'ADVANCED',
        '4': 'PROFESSIONAL',
        '5': 'EXPERT'
    };

    const onInputSkill = (e) => {
        setSkill(prevState => ({
            ...prevState,
            skillName: e.target.value
        }));
    };
    const onInputExp = (e) => {
        setSkill(prevState => ({
            ...prevState,
            experience: parseInt(e.target.value)
        }));
    };
    const onInputProficiency = (e) => {
        // setProficiency(SKILL_PROFICIENCY_VALUE_MAP[e.target.value]);
        // userSkill.proficiency = e.target.value;
        setSkill(prevState => ({
            ...prevState,
            proficiency: parseInt(e.target.value)
        }));
    };

    const deleteSkillBadge = (e) => {
        e.preventDefault();             //Prevent page reloading
        onDelete(skillId);
    };

    useEffect(()=> {
        onChange(skill);
    }, [skill]);

    return (
        <div className='admin-box row'>
            <div className='col-4'>
                <label className='admin-label' htmlFor='skillName'>Skill</label>
                <input type='text' className='form-control' id='skillName' 
                value={skill.skillName} onChange={(e) => onInputSkill(e)} />
            </div>
            <div className='col-3'>
                <label className='admin-label' htmlFor='experience'>Exp (YOE)</label>
                <input type='range' className='custom-range admin-form-range' min='1' max='50' step='1' id='experience'
                value={skill.experience} 
                onChange={(e) => onInputExp(e)} 
                />
                <span><center>{skill.experience} Year</center></span>
            </div>
            {/* // FIXME: How to map value Int to String */}
            <div className='col-3'>
                <label className='admin-label' htmlFor='proficiency'>Proficiency</label>
                <input type='range' className='custom-range admin-form-range' min='1' max='5' step='1' id='proficiency' 
                value={skill.proficiency} 
                onChange={(e) => onInputProficiency(e)} />
                <span><center>{SKILL_PROFICIENCY_VALUE_MAP[skill.proficiency]}</center></span>
            </div>
            <div className='admin-element-btn col-2'>
                <button className='btn btn-danger' onClick={deleteSkillBadge}>Delete</button>
            </div>
        </div>
    );
};

export default SkillBadgeInput;
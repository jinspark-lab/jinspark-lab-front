import React from 'react';
import CareerBox from '../components/CareerBox';
import SkillBadge from '../components/SkillBadge';

const ProfileContentView = ({userProfile}) => {
    return (
        <div className="card">
            <div className="card-header">
                &#128100; My Profile
            </div>
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={userProfile.pictureUrl} className="card-img" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{userProfile.name}</h4>
                            <h5 className="card-text">{userProfile.title}</h5>
                            <p className="card-text">{userProfile.description}</p>
                            <p className="card-text">{userProfile.linkedinUrl}</p>
                            <p className="card-text">{userProfile.contactEmail}</p>
                            <p className="card-text">
                                <small className="text-muted">Last update 1 min ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card mb-3">
            </div> */}
            <div className="card-header">
                &#128293; Skills / Experience / Proficiency
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        userProfile.userSkillList.map(userSkill => 
                        <SkillBadge key={userSkill.skillName} name={userSkill.skillName} experience={userSkill.experience} proficiency={userSkill.proficiency} />)
                    }
                </div>
            </div>
            <div className="card-header">
                &#128161; Career / Projects
            </div>
            <div className="card-body">
                {
                    userProfile.userCareerList.map(userCareer => 
                        <CareerBox key={userCareer.careerId} company={userCareer.company} jobTitle={userCareer.jobTitle} desc={userCareer.description} 
                        startDate={userCareer.careerStart.split(" ")[0]} endDate={userCareer.careerEnd !== null ? userCareer.careerEnd.split(" ")[0] : null} projectList={userCareer.userProjectList} />
                        )
                }
            </div>
        </div>
    )
};
export default ProfileContentView;
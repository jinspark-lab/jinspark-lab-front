import React from 'react';
import { Link } from 'react-router-dom';
import CareerBox from '../../components/home/CareerBox';
import SkillBadge from '../../components/home/SkillBadge';

const ProfileContentView = ({userProfile}) => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={userProfile.pictureUrl} className="card-img" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{userProfile.name}</h4>
                            <h5 className="card-text">{userProfile.title}</h5>
                            <p className="card-text p-2" style={{textAlign: 'left'}}>{userProfile.description}</p>
                            <div className='row'>
                                <div className='col-6 App-box'>
                                    <p className="card-text font-monospace">&#128231;{userProfile.contactEmail}</p>
                                </div>
                                <div className='col-6'>
                                    <a href={userProfile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-primary'>
                                            Go to LinkedIn Profile
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <p className="card-text">
                                <small className="text-muted">Last update -</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className='col-2 App-box'>
                    <p className="text-decoration-underline" style={{'font-family': 'gill sans !important'}}>
                        <h4>Skills</h4>
                    </p>
                </div>
                <div className='col-10'>
                    <div className="row">
                        {
                            userProfile.userSkillList.map(userSkill =>
                            <SkillBadge key={userSkill.skillName} name={userSkill.skillName} experience={userSkill.experience} proficiency={userSkill.proficiency} />)
                        }
                    </div>
                </div>
            </div>
            <hr />
            <div className='container p-2' style={{'text-align': 'left'}}>

                {
                    userProfile.userCareerList.map(userCareer =>
                        <CareerBox key={userCareer.careerId} company={userCareer.company} jobTitle={userCareer.jobTitle} desc={userCareer.description}
                        startDate={userCareer.careerStart.split(" ")[0]} endDate={userCareer.careerEnd !== null ? userCareer.careerEnd.split(" ")[0] : null} projectList={userCareer.userProjectList} />
                        )
                }
            </div>
            <div className="card-body">
            </div>
        </div>
    )
};
export default ProfileContentView;

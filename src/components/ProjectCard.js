import React from 'react';

const ProjectCard = ({projectName, projectLabel, projectDescription, text}) => {

    const selectUrl = (projectLabel) => {
        switch (projectLabel) {
            case "prepa-drone":
                return "https://www.prepa-drone.fr"
            case "smart-edl":
                return "https://www.smartedl.com"
            default:
                break;
        }
    }

    return (
        <div className='project-card'>
            <a href={selectUrl(projectLabel)} target="_blank" rel="noreferrer" className='project-card__preview' style={{backgroundImage:`url(./img/${projectLabel}-background.jpg)`}}>
                <div className='project-card__preview__background'></div>
                <img className='project-card__preview__logo' src={`./img/${projectLabel}-logo.png`} alt={`Logo ${projectLabel}`} />
                <p className='project-card__preview__access'>{text.websiteLink}</p>
            </a>
            <div className='project-card__text'>
                <h3 className='project-card__text__title'>{projectName}</h3>
                <div className={`project-card__text__separator project-card__text__separator--${projectLabel === "prepa-drone" ? "orange" : "green"}`}></div>
                <p className='project-card__text__description'>{projectDescription}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
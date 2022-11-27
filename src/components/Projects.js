import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({text}) => {
    return (
        <section className='section' id='projects'>
            <div className='section__box'>
                <div className='section__box__container'>
                    <div className='section__box__container__text'>
                        <h2 className='section__box__container__text__title'>{text.title}</h2>                
                        <div className='section__box__container__text__separator'></div>
                    </div>
                    <div className='section__box__container__projects'>
                        <ProjectCard projectName={"Prepa Drone"} projectLabel={"prepa-drone"} projectDescription={text.prepaDrone.description} text={text} />
                        <ProjectCard projectName={"Smart Edl"} projectLabel={"smart-edl"} projectDescription={text.smartEdl.description} text={text} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
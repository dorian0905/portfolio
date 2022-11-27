import React from 'react';

const About = ({text}) => {
    return (
        <section className='section' id='about'>
            <div className='section__box'>
                <div className='section__box__container'>
                    <div className='section__box__container__text'>
                        <h2 className='section__box__container__text__title'>{text.title}</h2>
                        <div className='section__box__container__text__separator'></div>
                        <p className='section__box__container__text__description'>{text.description_1}</p>
                        <p className='section__box__container__text__description'>{text.description_2}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
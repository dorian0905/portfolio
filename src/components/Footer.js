import React from 'react';
import { Linkedin, Envelope, Github } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <a className='footer__link' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dorian-zaragoza
">
                <Linkedin size={20} className='footer__link__img' />
            </a>
            <a className='footer__link' href="mailto:do.zaragoza@gmail.com">
                <Envelope size={20} className='footer__link__img' />
            </a>
            <a className='footer__link' target="_blank" rel="noreferrer" href="https://github.com/dorian0905">
                <Github size={20} className='footer__link__img' />
            </a>
        </footer>
    );
};

export default Footer;
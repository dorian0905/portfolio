import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = ({ text, changeLanguage }) => {

    const [activeLink, setActiveLink] = useState("about")

    useEffect(() => {
        const limit = document.getElementById("projects").offsetTop
        const handleScroll = () => {
            (window.scrollY < limit-100) ? setActiveLink("about") : setActiveLink("projects")
        };
        window.addEventListener('scroll', handleScroll);
      }, []);

    return (
        <>
            <Header text={text.nav} changeLanguage={changeLanguage} activeLink={activeLink} setActiveLink={setActiveLink} />
            <About text={text.about} />
            <Projects text={text.projects} />
            <Footer />
        </>
    );
};

export default Home;
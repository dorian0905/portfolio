import React from 'react';

const Header = ({text, changeLanguage, activeLink, setActiveLink}) => {
    return (
        <header className='header'>
            <a href="#about"><h1 className='header__name'>Dorian Zaragoza</h1></a>
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className="header__nav__list__item">
                        <a className={`header__nav__list__item__link ${activeLink === "about" && "active"}`} href="#about" onClick={() => setActiveLink("about")}>{text.about}</a>
                    </li>
                    <li className="header__nav__list__item">
                        <a className={`header__nav__list__item__link ${activeLink === "projects" && "active"}`} href="#projects" onClick={() => setActiveLink("projects")}>{text.projects}</a>
                    </li>
                </ul>
            </nav>
            <input className="header__language"  onChange={(e) => changeLanguage(e)} id="languageInput" type="checkbox" />
        </header>
    );
};

export default Header;
import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <a href="#" className="header__link">
                <img src={logoPath} className="header__logo" alt="Место"/>
            </a>
        </header>
    )
}

export default Header;
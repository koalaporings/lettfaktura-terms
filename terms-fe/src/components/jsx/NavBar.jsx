import { useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "../jsx/Dropdown.jsx";
import "../css/Navbar.css";


function Navbar( { setParentLanguage } ) {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('English');
    const [showDropdown, setShowDropdown] = useState(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const dropdownHandler = () => {
        setShowDropdown(!showDropdown);
    }

    const getLanguageData = (data) => {
        changeLanguage(data);
        setLanguage(data);
        setParentLanguage(data);
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">
                    <img src="src/assets/diamond.png"/>
                </a>
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
                { isOpen ? <Dropdown navbar={true}/> : ''}
            </div>
            <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
                <li><a href="#home">{t("home", { defaultValue: "Home" })}</a></li>
                <li><a href="#order">{t("order", { defaultValue: "Order" })}</a></li>
                <li><a href="#customers">{t("customers", { defaultValue: "Our Customers" })}</a></li>
                <li><a href="#about">{t("about", { defaultValue: "About us" })}</a></li>
                <li><a href="#contact">{t("contact", { defaultValue: "Contact Us" })}</a></li>
                <li className="dropdown-language"><a href="#language" onClick={dropdownHandler}>
                        {language}
                        <img className="flag" src={language === 'English' ? 'src/assets/uk.png' : 'src/assets/sweden.jpg'}/>
                    </a>
                    { showDropdown ? <Dropdown getLanguageData={getLanguageData}/> : ''}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

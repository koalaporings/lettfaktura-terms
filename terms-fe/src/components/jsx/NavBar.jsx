import { useState } from "react";
import "../css/NavBar.css";
import Dropdown from "../jsx/Dropdown.jsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('English');
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownHandler = () => {
        setShowDropdown(!showDropdown);
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
                { isOpen ? <Dropdown/> : ''}
            </div>
            <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#order">Order</a></li>
                <li><a href="#customers">Our Customers</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li className="dropdown-language"><a href="#language" onClick={dropdownHandler}>
                        {language}
                        <img className="flag" src="src/assets/uk.png"/>
                    </a>
                    { showDropdown ? <Dropdown/> : ''}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

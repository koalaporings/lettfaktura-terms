import React, { useState } from "react";
import "../css/Dropdown.css";

const Dropdown = ({ label}) => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        'English',
        'Svenska'
    ];

    return (
        <div className="dropdown">
            <ul className="dropdown-menu">
                {items.map((item, index) => (
                    <li key={index} onClick={item.onClick}>
                        {item}
                        {index === 0 ? <img src="src/assets/uk.png"/> : <img src="src/assets/sweden.jpg"/> }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;

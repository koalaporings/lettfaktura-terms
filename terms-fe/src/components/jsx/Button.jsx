import { useState } from "react";
import "../css/Button.css";

const GreenButton = ({ children, onClick }) => {
    const [buttonMessage, setButtonMessage] = useState('Close and Go Back')
    return (
        <button className="btn" onClick={onClick}>
            {buttonMessage}
        </button>
    );
};

export default GreenButton;

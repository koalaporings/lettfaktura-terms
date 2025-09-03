import enFlag from "../../assets/uk.png";
import sweFlag from "../../assets/sweden.jpg";
import "../css/Dropdown.css";

const Dropdown = ({ getLanguageData, navbar }) => {

    const items = [
        'English',
        'Svenska'
    ];
    

    return (
        <div className="dropdown">
            <ul className={`dropdown-menu ${navbar ? "right" : ""}`}>
                { navbar ? (
                    <>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#order">Order</a></li>
                        <li><a href="#customers">Our Customers</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </>
                ) : (items.map((item, index) => (
                    <li key={index} onClick={() => getLanguageData(item)}>
                        {item}
                        {index === 0 ? <img src={enFlag}/> : <img src={sweFlag}/> }
                    </li>
                )))
            }
            </ul>
        </div>
    );
};

export default Dropdown;

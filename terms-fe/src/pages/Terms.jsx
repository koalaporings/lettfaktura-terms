import "./Terms.css";
import Button from '../components/jsx/Button.jsx'
import TextArea from "../components/jsx/TextArea.jsx";

function Terms() {
    return (
        <body>
            <div className='title'>
                Terms
            </div>
            <div className='content'>
                <Button/>
                <TextArea/>
                <Button/>
            </div>
        </body>
    );
}

export default Terms;

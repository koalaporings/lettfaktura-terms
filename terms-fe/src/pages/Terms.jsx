import "./Terms.css";
import Button from '../components/jsx/Button.jsx'
import TextArea from "../components/jsx/TextArea.jsx";

function Terms( language ) {
    return (
        <>
            <div className='title'>
                Terms
            </div>
            <div className='content'>
                <Button/>
                <TextArea language={language}/>
                <Button/>
            </div>
        </>
    );
}

export default Terms;

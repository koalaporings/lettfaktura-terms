import "./Terms.css";
import Button from '../components/jsx/Button.jsx'
import TextArea from "../components/jsx/TextArea.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Terms({ language }) {

    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        if (language) {
            console.log(language)
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    return (
        <>
            <div className='title'>
                {t("terms", { defaultValue: "Terms" })}
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

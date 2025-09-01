import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../css/Button.css";

const GreenButton = ({ language }) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);
    
    return (
        <button className="btn">
            {t("button", { defaultValue: "Terms" })}
        </button>
    );
};

export default GreenButton;

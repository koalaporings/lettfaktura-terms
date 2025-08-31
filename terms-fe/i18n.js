import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        English: {
        translation: {
            home: "Home",
            order: "Order",
            customers: "Our Customers",
            about: "About us",
            contact: "Contact Us",
            button: "Close and Go Back",
        }
        },
        Svenska: {
        translation: {
            home: "Hem",
            order: "Beställ",
            customers: "Våra Kunder",
            about: "Om oss",
            contact: "Kontakta oss",
            button: "Stäng och gå tillbaka",
        }
        }
    },
    lng: "en",        
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;

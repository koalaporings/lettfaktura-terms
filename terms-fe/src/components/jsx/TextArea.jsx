import '../css/TextArea.css'
import { useEffect, useState } from 'react';
import { getTextsByLanguage } from '../../store/api';

function TextArea({ language }) {
    const [content, setContent] = useState(" ")

    useEffect(() => {
        const lang = language === 'English' ? 'english' : 'svenska';
        getTextsByLanguage(lang)
        .then((res) => setContent(res.data[0].content))
        .catch((err) => console.error(err));
    },[language]);

    return (
        <div className="container">
            <div
            dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}

export default TextArea;

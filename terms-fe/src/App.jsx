import './App.css'
import NavBar from './components/jsx/NavBar.jsx'
import Terms from './pages/Terms.jsx'
import { useState } from 'react'

function App() {
    const [language, setLanguage] = useState("English");

    const setParentLanguage = (data) => {
        setLanguage(data);
    };

    return (
        <>
            <body>
                <NavBar setParentLanguage={setParentLanguage}/>
                <Terms language={language}/>
            </body>
        </>
    )
}

export default App;

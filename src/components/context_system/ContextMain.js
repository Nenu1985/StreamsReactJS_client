import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LangugageContext from './contexts/LangugageContext';
import ColorContext from './contexts/ColorContext';


const ContextMain = () => {
    const [language, setLanguage] = useState('english')

    const onLanguageChange = (lang) => {
        setLanguage(lang)
    }

    return (
        <div className="ui container">
            <div>
                Select a language:
                <i className="flag us" onClick={() => onLanguageChange('english')} />
                <i className="flag ru" onClick={() => onLanguageChange('russian')} />
                <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
            </div>
            <div>{language}</div>
            <div>
                <LangugageContext.Provider value={language}>
                    <ColorContext.Provider value='red'>
                        <UserCreate />
                    </ColorContext.Provider>
                </LangugageContext.Provider>
            </div>
        </div>
    )
}

export default ContextMain;

import React from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "./i18n";

import Logo from './assets/logo.png'

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen w-full border flex justify-center items-center">
      
      <div className='border p-6 border-4 rounded-lg'>
        
        <img src={Logo} alt="" className="max-w-md"/>
        
        <h1 className="mx-auto my-4 text-xl text-blue-600">
          {t('react-translator-lucas')}
          </h1>
        <h1 className="mx-auto my-4 text-xl text-blue-600">
          {t('login.forgot-password')}
          </h1>
        <h1 className="mx-auto my-4 text-xl text-blue-600">
          {t('login.sigin')}
          </h1>
        
        <div className="flex space-x-4 items-center">
          <span>Selecione a linguagem: </span>
          <select className="border p-3 rounded-lg flex-grow" defaultValue={i18n.language} 
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            {availableLanguages.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
}

export default App;

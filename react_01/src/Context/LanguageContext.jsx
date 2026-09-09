import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {

  const [idioma, setIdioma] = useState('pt');

  function mudarIdioma() {
    setIdioma((idiomaAtual) =>
      idiomaAtual === 'pt' ? 'en' : 'pt'
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        idioma,
        mudarIdioma
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
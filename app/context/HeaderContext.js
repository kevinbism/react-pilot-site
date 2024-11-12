'use client';

import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isBookOpen, setBookOpen] = useState(false);
  const [isQrOpen, setQrOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setBookOpen(false); // Chiude il book quando si apre il menu
    setQrOpen(false); // Chiude il QR quando si apre il menu
  };

  const toggleBook = () => {
    setBookOpen(prev => !prev);
    setQrOpen(prev => !prev); // Apre/chiude il QR insieme al book
    setMenuOpen(false); // Chiude il menu quando si apre il book
  };

  return (
    <HeaderContext.Provider value={{ isMenuOpen, toggleMenu, isBookOpen, toggleBook, isQrOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);

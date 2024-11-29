'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isBookOpen, setBookOpen] = useState(false);
  const [isQrOpen, setQrOpen] = useState(false);
  const pathname = usePathname();

  const resetState = useCallback(() => {
    setMenuOpen(false);
    setBookOpen(false);
    setQrOpen(false);
  }, []);

  useEffect(() => {
    if (!pathname) return;

    resetState();
  }, [pathname, resetState]);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setBookOpen(false);
    setQrOpen(false);
  };

  const toggleBook = () => {
    setBookOpen(prev => !prev);
    setQrOpen(prev => !prev);
  };

  return (
    <HeaderContext.Provider value={{ isMenuOpen, isBookOpen, isQrOpen, toggleMenu, toggleBook }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);

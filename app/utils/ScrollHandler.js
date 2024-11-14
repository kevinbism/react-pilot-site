'use client';

import { useEffect } from 'react';
import { pageScroll } from './pageScroll';

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = () => pageScroll();

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Call initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // Non rende nulla
};

export default ScrollHandler;

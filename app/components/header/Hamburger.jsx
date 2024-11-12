'use client';

import '@/styles/header/_hamburger.scss';
import { useHeader } from '@/context/HeaderContext';

const Hamburger = () => {
  const { toggleMenu, isMenuOpen } = useHeader();
  return (
    <div
      className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''} flex flex-ai-c`}
      onClick={toggleMenu}
      onKeyDown={e => e.key === 'Enter' && toggleMenu()}
    >
      <div className="hamburger-box">
        <span className="hamburger__line" />
        <span className="hamburger__line" />
        <span className="hamburger__line" />
        <span className="hamburger__line" />
        <span className="hamburger__line" />
      </div>
    </div>
  );
};

export default Hamburger;

'use client';

import { useCallback } from 'react';

const ArrowScroll = () => {
  const handleScroll = useCallback(() => {
    const headerElement = document.querySelector('.header');
    if (headerElement) {
      const offset = headerElement.offsetHeight - 79;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div
      className="header-arrow"
      onClick={handleScroll}
      onKeyDown={e => e.key === 'Enter' && handleScroll()}
    >
      <i className="fa-thin fa-angle-down header-arrow__icon" />
    </div>
  );
};

export default ArrowScroll;

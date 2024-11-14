import React from 'react';

const Subtitle = ({ tag = 'h2', className = '', children }) => {
  return <>{React.createElement(tag, { className: `${className} subtitle` }, children)}</>;
};

export default Subtitle;

import React from 'react';

const Link = ({ active, onClick, children }) => (
  <button
    onClick={ onClick }
    disabled={ active }
    style={{
      marginLeft: '10px'
    }}
  >
    {children}
  </button>
);

export default Link;
import React from 'react';
import { CreatedByCSS } from './styles';

const CreatedBy = () => {
  return (
    <CreatedByCSS>
      <a
        href="https://github.com/ryuash" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Created by @ryuash
      </a>
    </CreatedByCSS>
  );
};

export default CreatedBy;

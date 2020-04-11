import React from 'react';
import { TitleCSS } from './styles';

const Title = () => {
  return (
    <TitleCSS>
      <a
        href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Conway's Game of Life
      </a>
    </TitleCSS>
  )
}

export default Title;

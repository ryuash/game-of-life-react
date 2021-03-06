import styled from 'styled-components';

export const CreatedByCSS = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 0;
  right: -20px;
  transform-origin: left bottom;
  transform: rotate(-90deg);
  z-index: 50;
  
  a {
    display: flex;
    align-items: center;
    text-align: center;
    color: #cccccc;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &::before, &::after {
      content: '';
      border-bottom: 1px solid #cccccc;
    }

    &::before {
      margin-right: 0.5em;
      width: 30px;
    }

    &::after {
        margin-left: 0.5em;
        width: 15px;
    }
  }
`

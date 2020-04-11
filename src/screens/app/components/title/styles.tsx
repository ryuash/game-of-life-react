import styled from 'styled-components';

export const TitleCSS = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 50;
  
  a {
    display: flex;
    align-items: center;
    text-align: center;
    color: #cccccc;
    font-size: 1.3rem;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  
    &::before, &::after {
      content: '';
      border-bottom: 1px solid #cccccc;
    }
  
    &::before {
      margin-right: 0.5em;
      width: 100px;
    }
  
    &::after {
        margin-left: 0.5em;
        width: 10px;
    }
  }
`

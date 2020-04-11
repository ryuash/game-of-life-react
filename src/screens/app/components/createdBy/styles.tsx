import styled from 'styled-components';

export const CreatedByCSS = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 0;
  right: 0;
  transform-origin: left bottom;
  transform: rotate(-90deg);

  a {
    display: flex;
    align-items: center;
    text-align: center;
    color: #cccccc;
    transition: 0.3s;

    &:hover {
      opacity: 0.7
    }
  }

  a::before, a::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #cccccc;
  }

  a::before {
      margin-right: .25em;
      width: 30px;
  }

  a::after {
      margin-left: .25em;
      width: 10px;
  }
`

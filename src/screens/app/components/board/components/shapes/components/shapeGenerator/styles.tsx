import styled from 'styled-components';

export const ShapeGeneratorCSS = styled.table`
  border-collapse: collapse;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.7
  }

  &:last-child {
    margin-bottom: 0;
  }

  td {
    width: 10px;
    height: 10px;
    border: solid 1px white;
    background: #b1b1b1;
    &.dead {
      background: transparent;
    }
  }
`

import { css } from 'styled-components';

const mixins: any = {
  infoContainer: css`
    padding: 1rem;
    width: 50%;
    min-height: 50px;
    border: dashed 2px #d4d1d1;
    background: white;
  `,
  shapes: css`
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

    td {
      width: 10px;
      height: 10px;
      border: solid 1px white;
      background: #b1b1b1;
    }
  `,
};

export default mixins;

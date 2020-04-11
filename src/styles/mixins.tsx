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

    td {
      width: 10px;
      height: 10px;
      border: solid 1px white;
      background: #b1b1b1;
    }
  `,
};

export default mixins;

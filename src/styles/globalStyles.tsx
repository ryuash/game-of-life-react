import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    line-height: 1.3;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0 0 0 0;
  }
`;

export default GlobalCSS;

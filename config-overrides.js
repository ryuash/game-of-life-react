const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@src': path.resolve(__dirname, `${paths.appSrc}/`),
    '@styles': path.resolve(__dirname, `${paths.appSrc}/styles/`),
    '@interfaces': path.resolve(__dirname, `${paths.appSrc}/types/`),
  })(config, env);
  return config;
};

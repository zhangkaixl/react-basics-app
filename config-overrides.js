const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    config = injectBabelPlugin('transform-decorators-legacy', config);
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
    config = rewireLess(config, env);
    return config;
};
const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'browser-polyfill'}], config);
    config.devtool = false; // 关掉 sourceMap
    config = rewireLess.withLoaderOptions({
        modifyVars: {"@primary-color": "#1DA57A"},
        javascriptEnabled: true,
    })(config, env);
    return config;
};


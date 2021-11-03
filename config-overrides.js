// 修改build 之后的路径
module.exports = function override(config, env) {
        // 修改path目录
        const path  = require('path');
        const paths = require('react-scripts/config/paths');
        paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');
        config.output.path = path.join(path.dirname(config.output.path), 'dist');
        return config;
 };
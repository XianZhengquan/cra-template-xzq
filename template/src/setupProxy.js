/**
 * 代理配置
 * @author XianZhengquan
 * @create 2020/4/14
 */
const {createProxyMiddleware} = require('http-proxy-middleware'); // 1.0.0版本的引用方式

module.exports = function (app) {
    // 后端api
    app.use('/api', createProxyMiddleware({
        target: 'http://test.uokohome.com:8970/api',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }));

    // mock
    app.use('/mock', createProxyMiddleware({
        target: 'https://www.fastmock.site/mock/06f05928112ed4d737390c4f06eee7a1/mock',
        changeOrigin: true,
        pathRewrite: {
            '^/mock': ''
        }
    }));
};

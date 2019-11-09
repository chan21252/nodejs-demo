/**
 * @description 主服务器，调用静态资源服务器模块
 * @author Chan
 * @version 2019-11-09
 */

const http = require('http');
const path = require('path');
const ss = require('./staticServer');

http.createServer((req, resp) => {
    ss.staticServer(req, resp, path.join(__dirname, 'www'));
}).listen(3000, () => {
    console.log('server is running...');
});
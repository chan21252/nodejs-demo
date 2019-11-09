/**
 * @description 初步实现一个服务器
 */
const http = require('http');

/* //创建服务器
let server = http.createServer();

//处理请求
server.on('request', (req, resp) => {
    resp.end('hello');
});

//监听端口
server.listen(3000); */

http.createServer((req, resp) => {
    resp.end('OK');
}).listen(3000, '192.168.88.1', () => {
    console.log('server is running ...');
});
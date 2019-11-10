/**
 * @description get提交参数测试
 * @author Chan
 * @version 2019-11-10
 */

const http = require('http');
const url = require('url');

http.createServer((req, resp) => {
    const urlObj = url.parse(req.url, true);
    console.log(urlObj);
    resp.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    resp.end(`用户名${urlObj.query.username}，密码${urlObj.query.password}`);
}).listen(3000, () => {
    console.log('服务器已启动...')
});
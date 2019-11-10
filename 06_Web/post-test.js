/**
 * @description post参数提交
 * @author Chan
 * @version 2019-11-10
 */

const http = require('http');
const querystring = require('querystring');

http.createServer((req, resp) => {
    //console.log(req.url.toString());

    //处理登录请求
    if (req.url.startsWith('/login')) {
        let params = '';

        //获取参数
        req.on('data', (chunk) => {
            console.log(`chunk=${chunk}`);
            params += chunk;
        });

        req.on('end', () => {
            console.log('params=' + params);    //username=admin&password=123
            let paramObj = querystring.parse(params);   //字符串转obj
            let paramJson = JSON.stringify(paramObj);   //obj转json
            resp.writeHead(200, {
                'Content-Type': 'application/json;charset=utf-8'
            });

            resp.end(paramJson);
        });
    }
}).listen(3000, () => {
    console.log('server is running...');
});
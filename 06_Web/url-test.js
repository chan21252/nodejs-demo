/**
 * @description 请求路径分发
 * @author Chan
 * @version 2019-11-09
 */

const http = require('http');

// http.createServer((req, resp) => {
//     resp.write('hello');
//     resp.write('node.js');

//     //路径分发
//     if(req.url.startsWith('/index')) {
//         resp.end('index');
//     } else if(req.url.startsWith('/about')) {
//         resp.end('about');
//     } else {
//         resp.end('404 NOT FOUND');
//     }
// }).listen(3000, '192.168.88.1', () => {
//     console.log('server is running ...');
// });


const path = require('path');
const fs = require('fs');

let readFile = (url, resp) => {
    let filePath = path.join(__dirname, 'www', url);
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            resp.end('503 Bad GateWay');
        } else {
            resp.end(data);
        }
    });
};

http.createServer((req, resp) => {
    if(req.url.startsWith('/index')) {
        readFile('index.html', resp);
    } else if(req.url.startsWith('/about')) {
        readFile('about.html', resp);
    } else if(req.url.startsWith('/list')) {
        readFile('list.html', resp);
    } else {
        resp.writeHead(404, {
            'Content-Type': 'text/html;charset=utf-8'
        });    
        resp.end('404 NOT FOUND');
    }

}).listen(3000, '127.0.0.1', () => {
    console.log('server is running...');
});
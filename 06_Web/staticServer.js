/**
 * @description 静态资源服务器模块
 * @author Chan
 * @version 2019-11-09
 */

const path = require('path');
const fs = require('fs');
const mime = require('./mime').mime;

exports.staticServer = (req, resp, root) => {
    //读取请求文件
    fs.readFile(path.join(root, req.url), (err, fileContent) => {
        //读取失败
        if (err) {
            resp.writeHead(404, {
                'Content-Type': 'text/plain;charset=utf-8'
            });
            resp.end('404 NOT FOUND');
        } else {
            let dataType = 'text/html';     //默认文件类型
            let ext = path.extname(req.url).substring(1);   //文件拓展名

            //设置mime类型
            if (mime[ext]) {
                dataType = mime[ext];
            }
            
            //文本类型设置编码
            if (dataType.startsWith('text')) {
                dataType += ';charset=utf-8';
            }

            resp.writeHead(200, {
                'Content-Type': dataType
            });
            resp.end(fileContent);
        }
    });
};
/**
 * @description 动态服务器开发
 * example：成绩查询
 * @author Chan
 * @version 2019-11-10
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const queryString = require('querystring');
const scores = require('./view/scores.json');

http.createServer((req, resp) => {
    //查询成绩的地址   
    const queryPath = '/query';
    const scorePath = '/score';

    //字符集
    const charset = 'utf-8';

    //处理查询请求
    if (req.url.startsWith(queryPath) && req.method == 'GET') {
        fs.readFile(path.join(__dirname, 'view', 'query.tpl'), charset, (err, conetent) => {
            if (err) {
                resp500(resp);
            } else {
                resp.writeHead(200, {
                    'Content-Type': 'text/html;charset=utf-8'
                });
                resp.end(conetent);
            }
        });
    } else if (req.url.startsWith(scorePath)) {
        fs.readFile(path.join(__dirname, 'view', 'score.tpl'), charset, (err, conetent) => {
            if (err) {
                resp500(resp);
            } else {
                //获取post参数
                let params = '';

                req.on('data', (chunk) => {
                    params += chunk;
                });

                req.on('end', () => {
                    //解析参数
                    let paramObj = queryString.parse(params);
                    let stuCode = paramObj.code;
                    let scoreObj = scores[stuCode];     //json数据貌似只能用[]访问字段？？？

                    if(scoreObj != undefined) {
                        //渲染模板，返回页面
                        conetent = conetent.replace('${id}', stuCode);
                        conetent = conetent.replace('${chinese}', scoreObj.chinese);
                        conetent = conetent.replace('${math}', scoreObj.math);
                        conetent = conetent.replace('${english}', scoreObj.english);
                        conetent = conetent.replace('${summary}', scoreObj.summary);

                        resp.writeHead(200, {
                            'Content-Type': 'text/html;charset=utf-8'
                        });

                        resp.end(conetent);
                    } else {
                        resp.writeHead(200, {
                            'Content-Type': 'text/html;charset=utf-8'
                        });
                        resp.end('考号不存在，请核实！');
                    }
                });
            }
        });
    } else {
        resp404(resp);
    }
    //获取成绩的结果    /score
}).listen(3000, () => {
    console.log('服务器已启动...')
});

//500错误输出页面
let resp500 = (resp) => {
    resp.writeHead(500, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    resp.end('服务器故障，请联系技术人员！');
};

//404错误输出页面
let resp404 = (resp) => {
    resp.writeHead(404, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    resp.end('页面找不到了！');
};
/**
 * @description express框架使用
 * @author Chan
 * @version 2019-11-11
 */

var express = require('express');
var app = express();

app.get('/',(req, resp) => {
    resp.send('Hello World!');
});

var server = app.listen(3000, () => {
    console.log('服务器正在运行...');
});
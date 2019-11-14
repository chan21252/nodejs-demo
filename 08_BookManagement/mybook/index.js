/**
 * @description 图书管理项目-入口文件
 * @author Chan
 * @version 2019-11-14
 */

//导入模块
const path = require('path');
const express = require('express');
const router = require('./router');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();

//设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));

//处理请求参数
//挂载参数处理中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//设置路由
app.use(router);

//监听端口
app.listen(3000, () => {
    console.log('server is running...');
});
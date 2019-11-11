/**
 * @description 静态文件托管
 * @author Chan
 * @version 2019-11-11
 */

const express = require('express');
const app = express();

let server = app.use(express.static('public'));

server.listen(3000, () => {
    console.log('服务器正在运行...');
});
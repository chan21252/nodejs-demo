/**
 * @description 读文件测试
 * @author Chan
 * @version 2019-11-10
 */

const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'data.txt');
//异步
fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err) throw err;
    //不加utf-8编码，输出Buffer对象
    console.log(data);
});

//同步
let ret = fs.readFileSync(filePath, 'utf-8');
console.log(ret);
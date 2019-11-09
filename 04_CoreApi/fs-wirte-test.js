/**
 * @description 写文件测试
 * @author Chan
 * @version 2019-11-09
 */

const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'data.txt');
fs.writeFile(filePath, '将进酒 李白', 'utf-8', (err) => {
    if(err) throw err;
    console.log('写入完成');
});
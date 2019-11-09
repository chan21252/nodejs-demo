/**
 * @description 大文件读写，流操作
 * @author Chan
 * @version 2019-11-08
 */


const fs = require('fs');
const path = require('path');

let sPath = path.join('G:', 'test.mp4');
let dPath = path.join('G:', 'test1.mp4');

const readStream = fs.createReadStream(sPath);
const writeStream = fs.createWriteStream(dPath)

//事件处理
let num = 0;
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
    num++
});

readStream.on('end', () => {
    console.log(`执行了${num}次`);
});

//pipe流
readStream.pipe(writeStream);
 
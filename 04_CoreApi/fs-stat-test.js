/**
 * @description 获取文件stat测试
 * @author Chan
 * @version 2019-11-10
 */

const fs = require('fs');

//异步获取文件状态
fs.stat('./data.txt', (err, stat) => {
    if(err) throw err;

    console.log(stat);

    let {fileType, atime, mtime, ctime, birthTime} = {
        atime: stat.atime,
        mtime: stat.mtime,
        ctime: stat.ctime,
        birthTime: stat.birthtime
    };
    if(stat.isFile()) {
        fileType = '文件';
    }else if(stat.isDirectory()) {
        fileType = '目录';
    }

    console.log(`
        ${fileType}的访问时间：${atime},
        数据修改时间：${mtime},
        状态修改时间：${ctime},
        创建时间：${birthTime},
    `);
});

console.log("OK！");
/**
 * @description 文件操作demo
 * 自动创建web目录结构
 * @author Chan
 * @version 2019-11-07
 */

//导入模块
const fs = require('fs');
const path = require('path');

//项目路径
let root = 'f:\\';

//index.html文件内容
let content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首页</title>
</head>
<body>
    welcome
</body>
</html>`;

let initData = {
    projectName: 'mydemo',
    data: [{
        name: 'css',
        type: 'dir'
    }, {
        name: 'js',
        type: 'dir'
    }, {
        name: 'img',
        type: 'dir'
    }, {
        name: 'index.html',
        type: 'file'
    }]
};

//创建根目录
fs.mkdir(path.join(root, initData.projectName), (err) => {
    if(err) throw err;

    initData.data.forEach((item) => {
        if(item.type == 'dir') {
            fs.mkdirSync(path.join(root, initData.projectName, item.name),
                (err) => {if(err) throw err;}
            );
        } else if(item.type == 'file') {
            fs.writeFileSync(path.join(root, initData.projectName, item.name),
                content,
                'utf-8',
                (err) => {if(err) throw err;}
            );
        }
    });
});
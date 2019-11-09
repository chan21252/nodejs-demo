/**
 * @description 自定义包入口文件
 * markdown转html
 * @author Chan
 * @version 2019-11-09
 */

const path = require('path');
const fs = require('fs');
const md = require('markdown-it')();

let tplPath = path.join(__dirname, 'tpl.html');
let mdPath = path.join(__dirname, 'demo.md');
let targetPath = path.join(__dirname, 'demo.html');

// var md = require('markdown-it')();
// var result = md.render('# markdown-it rulezz!');

// console.log(result);

//获取markdown文件
fs.readFile(mdPath, 'utf-8', (err, data) => {
    if(err) return;

    //渲染markdown文件为html
    let result = md.render(data);

    //读取模板html内容，替换占位符为markdown内容
    let tpl = fs.readFile(tplPath, 'utf-8', (err, tplData) => {
        if(err) return;
        tplData = tplData.replace('<%content%>', result);

        //使用模板html输出
        fs.writeFile(targetPath, tplData, (err) => {
            console.log('转换完成');
        });
    });
});
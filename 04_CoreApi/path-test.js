/**
 * @description path路径操作
 * @author Chan
 * @version 2019-11-07
 */

const path = require('path');

//获取路径最后一部分
console.log(path.basename('/data/www/demo/index.html'));
console.log(path.basename('/data/www/demo/index.html', '.html'));

//获取路径
console.log(path.dirname('/data/www/demo/index.html')); //返回：/data/www/demo
console.log(path.dirname('/data/www/demo'));    //返回：/data/www

//获取扩展名
path.extname('index.html'); // 返回: '.html'
path.extname('index.coffee.md');    // 返回: '.md'
path.extname('index.');     // 返回: '.'
path.extname('index');      // 返回: ''
path.extname('.index');     // 返回: ''
path.extname('.index.md');  // 返回: '.md'

//路径格式化
let obj = path.parse(__filename)    //string->obj
console.log(obj);
/*
{
  root: 'F:\\',
  dir: 'F:\\projects\\nodejs\\nodejs-demo\\04_CoreApi',
  base: 'path-test.js',
  ext: '.js',
  name: 'path-test'
}
*/

let pathObj = {
    root: '/usr',
    dir: '/usr/local/nodejs',
    base: 'main.js',
    ext: '.js',
    name: 'mian'
};

let pathStr = path.format(pathObj); //obj->string
console.log(pathStr)

//路径拼接
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '../..'));
//\foo\bar\baz\asdf

//规范化路径
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));  ///foo/bar/baz/asdf
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));  //C:\\temp\\foo\\

//解析from到to的相对路径
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));

//路径解析
console.log(path.resolve('wwwroot', 'static_files/img/png/..', './gif/icon.gif'));
///当前路径/wwwroot/static_files/img/gif/icon.gif
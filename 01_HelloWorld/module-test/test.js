/**
 * @description 测试模块使用
 * @author Chan
 * @version 2019-11-06
 */

//方式1使用模块
/*
var calculation = require('./calculation.js');
var result = calculation.sum(2, 3);
*/

//方式2使用模块
var sum = require('./calculation');
require('./calculation.js');
var result = sum(3, 5);
console.log(result);

console.log(global.flag);

//加载json模块
//var data = require('./data.json');
var data = require('./data');
console.log(data.username);